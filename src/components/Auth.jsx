import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const authorization = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      return {user, token}
 
    })
    .catch(error => {
      console.log(error);
    });
};

export default authorization;
