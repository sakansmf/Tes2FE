import axios from "axios";
import { setCookie } from "nookies";
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constans/authConstans";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const loginAction =
  ({ username, password }) =>
    async (dispatch) => {
      try {
        await AsyncStorage.setItem('access_token', "AkbarToken");
      } catch (error) {
        console.log(error)
      }
      try {
        dispatch({
          type: AUTH_LOGIN_LOADING,
        });

        const { response } = await axios.post(
          "https://soal.staging.id/oauth/token",
          JSON.stringify({
            username: username,
            password: password,
            client_id: "e78869f77986684a",
            client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
            grant_type: "password",
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        await AsyncStorage.setItem('access_token', response.data.access_token);


        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          payload: response.data,
        });

        return response.data;
      } catch ({ response }) {
        dispatch({
          type: AUTH_LOGIN_FAIL,
          payload: response.data,
        });
      }
    };