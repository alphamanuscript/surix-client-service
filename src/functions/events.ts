import { ServiceBase } from "../service-base";
import { requests } from "../..";

export class Events extends ServiceBase {

    /**
     * Registers an event onto the handler provided.
     * @param handler Function to handle events
     */
    public menuItemClicked(handler: (event: any) => any) {
        this.internalOn(requests.events.menuItemClicked, handler);
    }
}