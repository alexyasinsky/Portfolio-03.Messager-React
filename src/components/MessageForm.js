import {useState} from "react";
import moment from "moment";

export default function MessageForm ({addMessage}) {
  const author = 'Alex';
  let [text, setText] = useState('');

  function handleText (event) {
    setText(event.target.value);
  }

  function handleMessage(e) {
    e.preventDefault();
    const message = {
      date: moment().format('LTS'),
      author: author,
      text: text
    };
    addMessage(message);
  }

  return (
    <form onSubmit={handleMessage}>
      <input
        onChange={handleText}
        value={text}
        type="text"
      />
      <button type='submit'> Отправить</button>
    </form>

  )
}