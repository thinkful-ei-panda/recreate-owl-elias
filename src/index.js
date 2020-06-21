import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

/* ReactDOM.render(
  <Chat
    events={[
      { type: "thumbs-up", message: "", timestamp: 1233456, participantId: 4 },
      { type: "chat-message", message: "Hello world", timestamp: 1233457, participantId: 5 },
    ]}
    participants={[{id: 4}, {id: 5}]}
  />,
  document.getElementById()
);

ReactDOM.render(
  <Chat
    events={[
      { type: "thumbs-up", message: "", timestamp: 1233456, participantId: 4 },
    ]}
    participants={[{id: 5}]}
  />,
  div
); */