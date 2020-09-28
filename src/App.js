import React, { useEffect, useState } from 'react';
import './App.css';
import { connectToSocket, sendMessage } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state?.messages);
  const [ message, setMessage ] = useState('');

	useEffect(() => {
    dispatch(connectToSocket())
	}, [dispatch]);

  return (
    <div>
      <ul id='messages'>
        {messages.map(x => <li key={x}>Echo response: {x}</li>)}
      </ul>
      <textarea
        rows='20'
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={()=> {
        setMessage('');
        dispatch(sendMessage(message));
      }}>Send Message</button>
    </div>
  );
}

export default App;
