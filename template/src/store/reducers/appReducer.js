import { APP_ACTIONS } from '../../constants/ActionConstants';

const initialState = {
  isConnected: false,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_IS_CONNECTED:
      return { ...state, isConnected: action.payload };
    default:
      return state;
  }
}
