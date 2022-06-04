import {List, Typography} from "@mui/material";
import BuddiesList from "../BuddiesList/BuddiesList";

import "./Buddies.scss";

export default function Buddies () {


  return (
    <div className="buddies">
      <Typography variant="h6">
         Друзья:
      </Typography>
      <List>
        <BuddiesList/>
      </List>
    </div>
  )
}