import getAuth from './getAuth';
import signInAnonymously from './signInAnonymously';
import getCredentialFromEmail from './getCredentialFromEmail';
import getCredentialFromFacebook from './getCredentialFromFacebook';
import getCredentialFromGoogle from './getCredentialFromGoogle';
import signInWithCredential from './signInWithCredential';
import sendPasswordResetEmail from './sendPasswordResetEmail';
import signOut from './signOut';

module.exports = {
  getAuth,
  signInAnonymously,
  getCredentialFromEmail,
  getCredentialFromFacebook,
  getCredentialFromGoogle,
  signInWithCredential,
  sendPasswordResetEmail,
  signOut,
};
