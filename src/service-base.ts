export class ServiceBase {
    private rpcTracker: any;
    private prefix: string = '__surix__';

    protected constructor() {
        this.rpcTracker = {};
        this.setUpService();
    }

    /**
     * Sends a request to Surixs
     * @param type Request type
     * @param payload Request payload
     */
    protected internalRequest(type: string, payload?: any): Promise<any> {
        return this.rpc(type, payload);
    }
    
    /**
     * Sends a request to Surix     
     * ====== TO BE DEPRICATED IN FUTURE =======
     * @param type Request type
     * @param payload Request payload 
     * @returns Promise Returns a promise
     */
    public request(type: string, payload?: any): Promise<any> {
        console.warn(`service.request method will be DEPRICATED in future. Please consider using service.${type} instead.`);
        return this.rpc(type, payload);
    }

    /**
     * An event listener wrapper 
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    public internalOn(eventName: string, handler: any) {
        document.addEventListener(`${this.prefix}${eventName}`, handler);
    }

    /**
     * An event listener wrapper        
     * ======== TO BE DEPRICATED IN FUTURE ============
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    public on(eventName: string, handler: any) {
        console.warn(`service.on method will be DEPRICATED in future. Please consider using service.events.${eventName} instead.`);
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
            this.rpcTracker[reqId] = { resolve, reject };
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
    private handleRpcRep(msg: any, handler: any) {
        if(msg.success) {
            handler.rpcTracker[msg.id].resolve(msg.body);
        } else {
            handler.rpcTracker[msg.id].reject(msg.body);
        }
        // Remove the promise from the handler because 
        // it has already been taken care of.
        delete handler.rpcTracker[msg.id];
    }
    /**
     * Emits a custom event
     * @param msg Message to be embedded to the custom event to be emitted
     */
    private emit(msg: any) {
        const event: Event = new CustomEvent(`${this.prefix}${msg.name}`, {detail: msg});
        document.dispatchEvent(event);
    }
    /**
     * Sets up Surix service
     */
    protected setUpService() {
        window.addEventListener('message', event => {
            const msg: any = event.data;
            switch(msg.type) {
                case 'rpcRep':
                    this.handleRpcRep(msg, this);
                    break;
                case 'event':
                    this.emit(msg);
                    break;
            }
        });
    }
}