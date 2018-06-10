import { call, put } from 'redux-saga/effects';
import { location } from '../../services';
import utils from '../../utils';

export default function* getFormattedAddressFromCoords(action) {
  try {
    const response = yield call(
      location.getFormattedAddressFromCoords,
      action.payload.latitude,
      action.payload.longitude,
    );
    const nextAction = utils.app.prepareNextAction(action, response);

    if (nextAction) {
      yield put(nextAction);
    }
  } catch (error) {
    yield put({
      type: 'SET_SYSTEM_MESSAGE',
      payload: utils.app.createError(error),
      error: true,
    });
  }
}
