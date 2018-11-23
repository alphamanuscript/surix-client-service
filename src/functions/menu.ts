import { requests } from '../requests';
import { MenuItem } from '../types';
import { ServiceBase } from '../service-base';

export class Menu extends ServiceBase{
    //public _service: Service;

    public constructor() {
        super();
        //this._service = Service.init();
    }

    /**
     * Populates Surix app menu with the provided items
     * @param menu MenuItem[] menu items
     */
    public populate(menu: MenuItem[]): Promise<undefined> {
        return this.internalRequest(requests.menu.populate, menu);
    }
}