import { ADD_LOGIN_ERROR, ADD_LOGIN_LOADING, ADD_LOGIN_SUCCESS } from "./actionType";

const initState = {
    isAuth: false,
    token: "",
    loading: false,
    error : false
}

const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
}

export const AuthReducer = (state = initState, { type, payload })=> {
    switch (type) {
        case ADD_LOGIN_LOADING:
            // saveToken(payload);
            return {
                ...state,
                loading : true
            }
        case ADD_LOGIN_SUCCESS:
saveToken(payload)
            return {
                ...state,
                loading: false,
            token:payload
            }
        case ADD_LOGIN_ERROR:
            return {
                ...state,
                error:true
            }
        default:
            return {...state}
    }
}