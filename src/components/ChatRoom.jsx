import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,

} from 'firebase/firestore';
import { useState, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import style from './chatRoom.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const ChatRoom = ({ auth }) => {
  const firestore = getFirestore();
  const messageRef = collection(firestore, 'messages');
  const bottom = useRef();

  const [messages] = useCollectionData(
    query(messageRef, orderBy('createdAt', 'asc'))
  );

  const [message, setMessage] = useState('');

  const onMessage = e => {
    setMessage(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { uid } = auth.currentUser;

    if (message !== '') {
      await addDoc(collection(firestore, 'messages'), {
        name: auth.currentUser.displayName,
        message: message,
        createdAt: new Date(),
        uid,
      });
      setMessage('');
      bottom.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('The message is empty');
    }
  };

  return (
    <div >
<div className={style.chatRoom}>
      <ul className={style.chat_ul}>
        {messages &&
          messages.map((message, key) => (
            <li key={key} className={message.uid === auth.currentUser.uid ? style.message_li_user : style.message_li} >
              {message.uid !== auth.currentUser.uid && message.name + ":"} {message.message}
            </li>
            
          ))}
              <span ref={bottom}></span>
      </ul>
      </div>
      <form action="submit" className={style.form} onSubmit={onSubmit}>
        
        <TextField
          id="outlined-name"
          label="Enter your message"
          className={style.input}
          variant="outlined"
          type="text"
          name="message"
          onChange={onMessage}
          value={message}
          sx={{
            borderRadius: 25,
            backgroundColor: 'white',
           
          }} 
        />
        
        <Button
          variant="contained"
          className={style.submit_button}
          type="submit"
          endIcon={<SendIcon />}
          sx={{
       
            height: 50,
            backgroundColor: '#3f87a6'
          }} 
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatRoom;
