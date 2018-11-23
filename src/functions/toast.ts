import { ToastParams, IToast } from '../types';
import { requests } from '../requests';
import { ServiceBase } from '../service-base';

export class Toast extends ServiceBase implements IToast {
    // private _service: Service;

    public constructor() {
        super();
        //this._service = Service.init();
    }

    /**
     * Displays the message provided on toast on Surix
     * @param message ToastMessage message to show on the toast
     */
    public show(message: ToastParams): Promise<undefined> {
        return this.internalRequest(requests.toast.show, message);
    }
}