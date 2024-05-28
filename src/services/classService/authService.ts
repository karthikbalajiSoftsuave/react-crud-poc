import { AxiosError } from "axios";
import { BaseService } from "./baseService";
import { ISuccessResponse,IErrorResponse } from "../../interface/apiResponse.interface";
import { ILogin } from "../../interface/login.interface";
import { API_END_POINT, parseAxiosError } from "../../common/constants";


export class AuthService extends BaseService {

    public async SignIn(signup: ILogin): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.post(API_END_POINT.LOGIN, signup);

            return data;
        } catch (error: any) {
            const err = parseAxiosError(error as AxiosError);

            return err.error.response.data;
        }
    }
}