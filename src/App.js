import {MessageList} from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import './App.css';
import {useCallback, useEffect, useState} from "react";
import moment from "moment";


function App() {

  let [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(prevState => {
      return prevState.concat(message);
    });
  };

  useEffect(() => {
    if (messages.length !==0 && !(messages[messages.length - 1].author === 'bot')) {
      setTimeout(() => {
        let message = [{
          date: moment().format('LTS'),
          author: 'bot',
          text: `${messages[messages.length - 1].text}?`
        }];
        addMessage(message);
      }, 1500);
    }
  }, [messages]);

  return (
    <div className="App">

      <MessageForm addMessage={addMessage}/>
      <MessageList messages={messages}/>
    </div>
  );
}

export default App;
