import firebase from 'react-native-firebase';

import utils from '../../../utils';

export default function pushData(ref, data) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(ref)
      .push(data)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(utils.app.createError(error));
      });
  });
}
