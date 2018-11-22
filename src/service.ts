import { ServiceBase } from './service-base';
import { Data } from './functions/data';
import { Toast } from './functions/toast';
import { Menu } from './functions/menu';
import { Events } from './functions/events';
export class Service extends ServiceBase {

    private _data: Data;
    private _toast: Toast;
    private _menu: Menu;
    private _events: Events;

    /**
     * Returns all data methods
     */
    public get data (): Data {
        return this._data;
    }
    /**
     * Returns all toast methods
     */
    public get toast (): Toast {
        return this._toast;
    }
    /**
     * Returns all menu methods
     */
    public get menu (): Menu {
        return this._menu;
    }

    /**
     * Returns all methods associated with events.
     */
    public get events (): Events {
        return this._events;
    }
    /**
     * Constructor
     */
    private constructor() {
        super();
        this._data = new Data();
        this._toast = new Toast();
        this._menu = new Menu();
        this._events = new Events();
    }

    /**
     * Provides Surix singleton
     */
    public static init(): Service {
        if(Service.instance == undefined){
            Service.instance = new Service();
        }
        return Service.instance;
    }
    
    private static instance?: Service = undefined;
}