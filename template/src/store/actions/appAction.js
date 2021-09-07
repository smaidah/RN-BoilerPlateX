import { APP_ACTIONS } from '../../constants/ActionConstants';

const setIsConnected = (isConnected) => ({
  type: APP_ACTIONS.SET_IS_CONNECTED,
  payload: isConnected,
});

export { setIsConnected };
