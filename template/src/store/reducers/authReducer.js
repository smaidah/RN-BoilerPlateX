import { AUTH_ACTIONS } from '../../constants/ActionConstants';

const initialState = {
  loading: false,
  token: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        token: null,
      };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
    case AUTH_ACTIONS.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
}
