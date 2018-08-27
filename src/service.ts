
export class Service {
    private rpcTracker: any;
    private static instance?: Service = undefined;
    private prefix: string = '__surix__';

    /**
     * Constructor
     */
    private constructor() {
        this.rpcTracker = {};
        this.setUpService();
    }
    /**
     * Sends a request to Surix
     * @param type Request type
     * @param payload Request payload 
     * @returns Promise Returns a promise
     */
    public request(type: string, payload?: any) {
        return this.rpc(type, payload);
    }

    /**
     * An event listener wrapper 
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    public on(eventName: string, handler: any) {
        document.addEventListener(`${this.prefix}${eventName}`, handler);
    }
    /**
     * Sends the specified message to Surix
     * @param msg Message to send to Surix
     */
    private sendMessage(msg: any) {
        window.parent.postMessage(msg, '*');
    }
    /**
     * Creates a promise then sends the message
     * @param name Name of the request to send to Surix
     * @param body 
     */
    private rpc(name: string, body: any) {
        const reqId = Math.random();
        return new Promise((resolve, reject) => {
            this.rpcTracker[reqId] = {
                resolve, reject
            };
            const message = {
                name, 
                body, 
                type: 'rpcReq', 
                id: reqId
            }
            this.sendMessage(message);
        });
    }
    /**
     * This handles the rpcReq type responses from Surix
     * @param msg Response from Surix
     * @param handler Handles the response
     */
    private handleRpcReq(msg: any, handler: any) {
        if(msg.success) {
            handler.rpcTracker[msg.id].resolve(msg.body);
        } else {
            handler.rpcTracker[msg.id].reject(msg.body);
        }  
    }
    /**
     * Emits a custom event
     * @param msg Message to be embeded to the custom event to be emitted
     */
    private emit(msg: any) {
        const event: Event = new CustomEvent(`${this.prefix}${msg.type}`, {detail: msg});
        document.dispatchEvent(event);
    }
    /**
     * Sets up Surix service
     */
    private setUpService() {
        window.addEventListener('message', event => {
            const msg: any = event.data;
            switch(msg.type) {
                case 'rpcRep':
                    this.handleRpcReq(msg, this);
                    break;
                default:
                    this.emit(msg);
            }
        });
    }

    public init() {
        if(Service.instance == undefined){
            Service.instance = new Service();
        }
        return Service.instance;
    }
}