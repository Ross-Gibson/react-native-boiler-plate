import { call, put } from 'redux-saga/effects';
import { database } from '../../services';
import utils from '../../utils';

export default function* getData(action) {
  try {
    const response = yield call(database.getData, action.payload.ref);

    if (action.meta && action.meta.nextAction) {
      yield put({
        ...action.meta.nextAction,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'SET_SYSTEM_MESSAGE',
      payload: utils.createError(error),
      error: true,
    });
  }
}
