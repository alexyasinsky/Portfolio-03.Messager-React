import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";


export default function BuddiesList({buddies}) {
  return (
    buddies.map((buddy) =>
      <ListItem key={buddy.id} >
        <BuddyItem buddy={buddy}/>
      </ListItem>
    )
  )
}