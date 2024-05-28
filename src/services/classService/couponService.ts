import { AxiosError } from "axios";
import { BaseService } from "./baseService";
import { ISuccessResponse, IErrorResponse } from "../../interface/apiResponse.interface";
import { API_END_POINT, parseAxiosError } from "../../common/constants";
import { ICouponGeneration } from "../../interface/couponGeneration.interface";


export class CouponService extends BaseService {

    public async AddCoupon(addCoupon: ICouponGeneration): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.post(API_END_POINT.ADD_COUPON, addCoupon);

            return data;
        } catch (error: any) {
            const err = parseAxiosError(error as AxiosError);

            return err.error.response.data;
        }
    }
    public async ViewAllCoupon(searchText: string | undefined): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.get(API_END_POINT.GET_ALL_COUPOUN + `?searchText=${searchText}`);

            return data;
        } catch (error: any) {
            const err = parseAxiosError(error as AxiosError);

            return err.error.response.data;
        }
    }

    public async DeleteCoupon(id: string | number | undefined): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.delete(API_END_POINT.DELETE_COUPON +"/"+ id);

            return data;
        } catch (error: any) {
            const err = parseAxiosError(error as AxiosError);

            return err.error.response.data;
        }
    }
}