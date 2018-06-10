import { call, put } from 'redux-saga/effects';
import { images } from '../../services';
import utils from '../../utils';

export default function* showImagePicker(action) {
  try {
    const response = yield call(images.showImagePicker);
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
