import initialState from './initialState';
import utils from '../../utils';

export default function appStateReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_APP_START':
      newState = utils.cloneObject(state);
      newState.appStart = true;
      return newState;

    case 'TOGGLE_LOADING':
      newState = utils.cloneObject(state);
      newState.loading = !newState.loading;
      return newState;

    case 'SET_DEVICE_LOCATION':
      newState = utils.cloneObject(state);
      newState.deviceLocation = action.payload;
      return newState;

    case 'SET_SYSTEM_MESSAGE':
      newState = utils.cloneObject(state);
      newState.systemMessage.message = action.payload.message; // instanceof Error
      newState.systemMessage.error = action.error;
      return newState;

    case 'RESET_SYSTEM_MESSAGE':
      newState = utils.cloneObject(state);
      newState.systemMessage = initialState.systemMessage;
      return newState;

    default:
      return state;
  }
}
