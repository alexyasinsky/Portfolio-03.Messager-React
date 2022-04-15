import {Message} from "./components/Message";
import './App.css';

function App() {
  const message = 'message from app'
  return (
    <div className="App">
      <Message message={message}/>
    </div>
  );
}

export default App;
