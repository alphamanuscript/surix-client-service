import { Service, requests } from "../../build/dist";
import { MenuItem } from "../types";

export class Menu {
    public _service: Service;

    public constructor() {
        this._service = Service.init();
    }

    /**
     * Populates Surix app menu with the provided items
     * @param menu MenuItem[] menu items
     */
    public populate(menu: MenuItem[]) {
        return this._service.request(requests.menu.populate, menu);
    }
}