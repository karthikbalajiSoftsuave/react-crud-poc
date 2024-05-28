import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { baseUrl } from '../../common/constants'

export class BaseService {
    httpClient: AxiosInstance = axios.create({ baseURL: baseUrl });

    constructor() {

        this.httpClient.interceptors.request.use((request: AxiosRequestConfig) => {
            if (!request.headers?.authorization) {
                request.headers = { Authorization: String(localStorage.getItem("accessToken")), ...request.headers };
            }
            
            return request;
        });
    }

}
