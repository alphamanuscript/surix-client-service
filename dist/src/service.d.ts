import { ServiceBase } from './service-base';
import { Data } from './functions/data';
import { Toast } from './functions/toast';
import { Menu } from './functions/menu';
import { Events } from './functions/events';
export declare class Service extends ServiceBase {
    private _data;
    private _toast;
    private _menu;
    private _events;
    /**
     * Returns all data methods
     */
    readonly data: Data;
    /**
     * Returns all toast methods
     */
    readonly toast: Toast;
    /**
     * Returns all menu methods
     */
    readonly menu: Menu;
    /**
     * Returns all methods associated with events.
     */
    readonly events: Events;
    /**
     * Constructor
     */
    private constructor();
    /**
     * Provides Surix singleton
     */
    static init(): Service;
    private static instance?;
}
