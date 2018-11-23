import { ServiceBase } from "../service-base";
export declare class Events extends ServiceBase {
    /**
     * Registers an event onto the handler provided.
     * @param handler Function to handle events
     */
    menuItemClicked(handler: (event: any) => any): void;
}
