import './App.scss';
import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import {BottomNavigation, BottomNavigationAction, Grid} from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import { mdiChatOutline } from '@mdi/js';
import Icon from "@mdi/react";
import {useState} from "react";
import Area from "./components/Area/Area";


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}



function App() {

  const user = 'Alex';

  const [value, setValue] = useState(0);

  return (

    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/chats' element={<Chats user={user}/>}>
              <Route path=":id" element={<Messages />} />
              <Route path="default" element={<Area className='chats__empty'> Выберите собеседника</Area>} />
            </Route>
          </Routes>
        </Grid>
        <Grid item xs={12}>
          <Area>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon fontSize="large"/>}
                component={NavLink}
                to='/'
              />
              <BottomNavigationAction
                label="Favorites"
                icon={<Icon path={mdiChatOutline}/>}
                component={NavLink}
                to='/chats/default'
              />
              <BottomNavigationAction label="Empty1"/>
              <BottomNavigationAction label="Empty2"/>
            </BottomNavigation>
          </Area>
        </Grid>
      </Grid>
    </div>


    
  );
}

export default App;
