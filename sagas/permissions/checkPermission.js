import { call, put } from 'redux-saga/effects';
import { permissions } from '../../services';
import utils from '../../utils';

export default function* checkPermission(action) {
  try {
    const response = yield call(permissions.checkPermission, action.payload.permission);
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
