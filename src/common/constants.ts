import { AxiosError } from "axios";
import { IErrorResponse } from "../interface/apiResponse.interface";
import * as toaster from "toastr";

export const baseUrl = `http://localhost:8080`

export const STATUS = {
    SUCCESS: "success",
    FAILURE: "failure"
}

export const API_END_POINT = {
    LOGIN: "auth/signin",
    ADD_COUPON: "coupon/addCoupon",
    GET_ALL_COUPOUN: "coupon/getAllCoupon",
    DELETE_COUPON:"coupon/deleteCoupon"
}

export const showNotification = (type: string, message: string): void => {
    const toasterOptions = { positionClass: "toast-top-center" };
    toaster.remove();
    // eslint-disable-next-line no-param-reassign
    message = message || "Something Went Wrong";

    if (type === STATUS.SUCCESS) {
        toaster.success(message, "", toasterOptions);
    } else if (type === STATUS.FAILURE) {
        toaster.error(message, "", toasterOptions);
    }
};

export const parseAxiosError = (error: AxiosError): IErrorResponse => {
    if (error.isAxiosError && error.response) {

        showNotification(STATUS.FAILURE, error.response.data.message);

        return { status: STATUS.FAILURE, message: error.response.data.message, error };
    } else {
        showNotification(STATUS.FAILURE, error.message);

        return { status: STATUS.FAILURE, message: error.message, error };
    }
};


