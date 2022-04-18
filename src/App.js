import './App.scss';
import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {

  const user = 'Alex';

  return (

    <div className="App">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/chats'>Chats</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}>
    
        </Route>
        <Route path='/chats' element={<Chats user={user}/>}>
        <Route path=":id" element={<Messages />} />
        </Route>
      </Routes>
      </div>

    
  );
}

export default App;
