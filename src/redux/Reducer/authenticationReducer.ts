import { USER_DETAILS } from "../Actions/actions";


const initialState = {
    userData: undefined
};
type IUser = {
    userData: any,
};

export const AuthReducer = (state: IUser = initialState, action: any) => {

    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                userData: action.payload
            };
        default:
            return state;
    }
};
