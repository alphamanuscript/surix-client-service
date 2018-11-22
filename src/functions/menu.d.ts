import { MenuItem } from '../types';
import { ServiceBase } from '../service-base';
export declare class Menu extends ServiceBase {
    constructor();
    /**
     * Populates Surix app menu with the provided items
     * @param menu MenuItem[] menu items
     */
    populate(menu: MenuItem[]): Promise<undefined>;
}
