import { ToastParams } from "../types";
export declare class Toast {
    private _service;
    constructor();
    /**
     * Displays the message provided on toast on Surix
     * @param message ToastMessage message to show on the toast
     */
    show(message: ToastParams): Promise<any>;
}
