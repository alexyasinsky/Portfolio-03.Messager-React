import './App.scss';
import Chats from "./pages/chats/Chats";


function App() {

  const user = 'Alex';

  return (
    <div className="App">
      <Chats user={user}/>
    </div>
  );
}

export default App;
