import { ToastParams, IToast } from '../types';
import { ServiceBase } from '../service-base';
export declare class Toast extends ServiceBase implements IToast {
    constructor();
    /**
     * Displays the message provided on toast on Surix
     * @param message ToastMessage message to show on the toast
     */
    show(message: ToastParams): Promise<undefined>;
}
