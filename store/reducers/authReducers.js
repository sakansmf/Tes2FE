import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constans/authConstans";

export const loginReducer = (
  state = {
    login: null,
    isSuccessLogin: false,
    isLoadingLogin: false,
    isFailedLogin: false,
    errorMessageLogin: null,
  },
  action
) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        login: action.payload,
        isSuccessLogin: true,
        isLoadingLogin: false,
        isFailedLogin: false,
        errorMessageLogin: null
      };
    case AUTH_LOGIN_LOADING:
      return {
        isSuccessLogin: false,
        isLoadingLogin: true,
        isFailedLogin: false,
        errorMessageLogin: null
      };
    case AUTH_LOGIN_FAIL:
      return {
        login: {},
        isSuccessLogin: false,
        isLoadingLogin: false,
        isFailedLogin: true,
        errorMessageLogin: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        login: null,
        isSuccessLogin: false,
        isLoadingLogin: false,
        isFailedLogin: false,
        errorMessageLogin: null
      };
    default:
      return state;
  }
};