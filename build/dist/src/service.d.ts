export declare class Service {
    private rpcTracker;
    private static instance?;
    private prefix;
    /**
     * Constructor
     */
    private constructor();
    /**
     * Sends a request to Surix
     * @param type Request type
     * @param payload Request payload
     * @returns Promise Returns a promise
     */
    request(type: string, payload?: any): Promise<{}>;
    /**
     * An event listener wrapper
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    on(eventName: string, handler: any): void;
    /**
     * Sends the specified message to Surix
     * @param msg Message to send to Surix
     */
    private sendMessage;
    /**
     * Creates a promise then sends the message
     * @param name Name of the request to send to Surix
     * @param body
     */
    private rpc;
    /**
     * This handles the rpcReq type responses from Surix
     * @param msg Response from Surix
     * @param handler Handles the response
     */
    private handleRpcReq;
    /**
     * Emits a custom event
     * @param msg Message to be embedded to the custom event to be emitted
     */
    private emit;
    /**
     * Sets up Surix service
     */
    private setUpService;
    static init(): Service;
}
