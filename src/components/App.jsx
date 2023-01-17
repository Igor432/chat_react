import connectFireBase from './fireBaseParams';
import authorization from './Auth';
import { getAuth } from 'firebase/auth';
import ChatRoom from './ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import style from './chatRoom.module.css';
import StarterPage from '../components/Starter'


connectFireBase();
const auth = getAuth();

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={user ? style.app_logged : style.app_start}>
      <header className={style.header}>
        <h3 className={style.logo} >CHAT ROOM</h3>
        {!user && <Button className={style.signin_button} sx={{
      width: 120,
      height: 40,
      color: 'white',
      backgroundColor: '#2B4F61'}} variant="contained" onClick={SignInButton}>Sign in</Button>
      }
      <SignOutButton />
      </header>
  {!user && <StarterPage/>}
      <section >
      {user && <ChatRoom auth={auth}/> }
      </section>
    </div>
  );
};

function SignInButton() {
  authorization();
}

function SignOutButton() {
  return (
    auth.currentUser && <Button variant="contained" sx={{
      width: 120,
      height: 40,
      backgroundColor: '#2B4F61'
    }} className={style.signout_button} onClick={() => auth.signOut()}>Sign-out</Button>
  );
}
