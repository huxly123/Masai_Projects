import { ADD_LOGIN_ERROR, ADD_LOGIN_LOADING, ADD_LOGIN_SUCCESS } from "./actionType";

const initState = {
    auth: {
        isAuth: false,
        token: "",
        loading: false,
        error: false
    }
}

const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
}

export const AuthReducer = (state = initState, { type, payload }) => {
    // console.log(state);
    switch (type) {
        case ADD_LOGIN_LOADING:
            // saveToken(payload);
            return {
                ...state,
                auth: {
                    ...state.auth,
                loading: true
            }
    }
        case ADD_LOGIN_SUCCESS:
            saveToken(payload)
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isAuth: true,
                    loading: false,
                    token: payload
                }
            }
        case ADD_LOGIN_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: true
                }
            }
        default:
            return {...state}
    }
}