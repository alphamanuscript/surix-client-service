var Service = /** @class */ (function () {
    /**
     * Constructor
     */
    function Service() {
        this.prefix = '__surix__';
        this.rpcTracker = {};
        this.setUpService();
    }
    /**
     * Sends a request to Surix
     * @param type Request type
     * @param payload Request payload
     * @returns Promise Returns a promise
     */
    Service.prototype.request = function (type, payload) {
        return this.rpc(type, payload);
    };
    /**
     * An event listener wrapper
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    Service.prototype.on = function (eventName, handler) {
        document.addEventListener("" + this.prefix + eventName, handler);
    };
    /**
     * Sends the specified message to Surix
     * @param msg Message to send to Surix
     */
    Service.prototype.sendMessage = function (msg) {
        window.parent.postMessage(msg, '*');
    };
    /**
     * Creates a promise then sends the message
     * @param name Name of the request to send to Surix
     * @param body
     */
    Service.prototype.rpc = function (name, body) {
        var _this = this;
        var reqId = Math.random();
        return new Promise(function (resolve, reject) {
            _this.rpcTracker[reqId] = {
                resolve: resolve, reject: reject
            };
            var message = {
                name: name,
                body: body,
                type: 'rpcReq',
                id: reqId
            };
            _this.sendMessage(message);
        });
    };
    /**
     * This handles the rpcReq type responses from Surix
     * @param msg Response from Surix
     * @param handler Handles the response
     */
    Service.prototype.handleRpcReq = function (msg, handler) {
        if (msg.success) {
            handler.rpcTracker[msg.id].resolve(msg.body);
        }
        else {
            handler.rpcTracker[msg.id].reject(msg.body);
        }
    };
    /**
     * Emits a custom event
     * @param msg Message to be embeded to the custom event to be emitted
     */
    Service.prototype.emit = function (msg) {
        var event = new CustomEvent("" + this.prefix + msg.type, { detail: msg });
        document.dispatchEvent(event);
    };
    /**
     * Sets up Surix service
     */
    Service.prototype.setUpService = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            var msg = event.data;
            switch (msg.type) {
                case 'rpcRep':
                    _this.handleRpcReq(msg, _this);
                    break;
                default:
                    _this.emit(msg);
            }
        });
    };
    Service.init = function () {
        if (Service.instance == undefined) {
            Service.instance = new Service();
        }
        return Service.instance;
    };
    Service.instance = undefined;
    return Service;
}());
export { Service };
//# sourceMappingURL=service.js.map