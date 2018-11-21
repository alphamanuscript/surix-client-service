import { Service } from "../../build/dist";
import { MenuItem } from "../types";
export declare class Menu {
    _service: Service;
    constructor();
    /**
     * Populates Surix app menu with the provided items
     * @param menu MenuItem[] menu items
     */
    populate(menu: MenuItem[]): Promise<{}>;
}
