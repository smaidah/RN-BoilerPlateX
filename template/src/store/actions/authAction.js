import axios from 'axios';

import { actionWrapper } from '..';

//constants
import { AUTH_ACTIONS } from '../../constants/ActionConstants';

// services
import { AccessToken } from '../../services/api';
import {
  getAccessToken,
  setAccessToken,
  deleteLoginData,
} from '../../services/storageService';
import AuthService from '../../services/api/authService';

async function deleteLocalData() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  AccessToken.token = null;
  AccessToken.source?.cancel?.();
  AccessToken.source = source;
  deleteLoginData();
}

export const login = (model) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(AUTH_ACTIONS.LOGIN_REQUEST));
      const loginResponse = await AuthService.login(model);
      const token = loginResponse?.token || null;
      AccessToken.token = token;
      dispatch(actionWrapper(AUTH_ACTIONS.LOGIN_SUCCESS, token));
      await setAccessToken(token);
    } catch (error) {
      dispatch(actionWrapper(AUTH_ACTIONS.LOGIN_FAILURE, error));
      AccessToken.token = '';
      throw error;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(AUTH_ACTIONS.LOGOUT_REQUEST));
      await deleteLocalData();
      dispatch(actionWrapper(AUTH_ACTIONS.LOGOUT_SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(AUTH_ACTIONS.LOGOUT_FAILURE, error));
      throw error;
    }
  };
};

export const userAutoLoggedIn = () => {
  return async (dispatch) => {
    const token = await getAccessToken();
    AccessToken.token = token;
    dispatch(actionWrapper(AUTH_ACTIONS.LOGIN_SUCCESS, token));
  };
};
