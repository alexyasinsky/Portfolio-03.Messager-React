import './message.scss';

export function MessageList ({messages}) {
  return messages.map((message, ind) => (
    <div key={ind}>
      <h3>{message.author}</h3>
      <p>{message.text}</p>
      <i>{message.date}</i>
    </div>
    )
  );
}

