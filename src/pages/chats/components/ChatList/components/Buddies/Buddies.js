import {List, Typography} from "@mui/material";
import BuddiesList from "./components/BuddiesList/BuddiesList";

import "./Buddies.scss";

export default function Buddies ({buddies, deleteBuddy}) {

  return (
    <div className="buddies">
      <Typography variant="h6">
         Друзья:
      </Typography>
      <List>
        <BuddiesList buddies={buddies} deleteBuddy={deleteBuddy}/>
      </List>
    </div>
  )
}