import { ServiceBase } from './service-base';
import { Data } from './functions/data';
import { Toast } from './functions/toast';
import { Menu } from './functions/menu';
export class Service extends ServiceBase {

    private _data: Data;
    private _toast: Toast;
    private _menu: Menu;

    /**
     * Returns all data methods
     */
    public get data () {
        return this._data;
    }
    /**
     * Returns all toast methods
     */
    public get toast () {
        return this._toast;
    }
    /**
     * Returns all menu methods
     */
    public get menu () {
        return this._menu;
    }
    /**
     * Constructor
     */
    private constructor() {
        super();
        this._data = new Data();
        this._toast = new Toast();
        this._menu = new Menu();
    }

    /**
     * Provides Surix singleton
     */
    public static init() {
        if(Service.instance == undefined){
            Service.instance = new Service();
        }
        return Service.instance;
    }
    
    private static instance?: Service = undefined;
}