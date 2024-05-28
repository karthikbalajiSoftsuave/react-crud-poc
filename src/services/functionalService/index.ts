import Axios from 'axios'
import { baseUrl } from '../../common/constants'

export const ApiCall = Axios.create({ baseURL: baseUrl })

export const API_END_POINTS = {
    LOGIN: "auth/signin",
    ADD_COUPON: "coupon/addCoupon"
}