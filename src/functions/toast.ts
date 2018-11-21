import { Service } from "../..";
import { ToastParams } from "../types";
import { requests } from "../../build/dist";

export class Toast {
    private _service: Service;

    public constructor() {
        this._service = Service.init();
    }

    /**
     * Displays the message provided on toast on Surix
     * @param message ToastMessage message to show on the toast
     */
    public show(message: ToastParams) {
        return this._service.request(requests.toast.show, message);
    }
}