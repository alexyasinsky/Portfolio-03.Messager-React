import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";


export default function BuddiesList({buddies, deleteBuddy }) {

  return (
    buddies.map((buddy) =>
      <ListItem key={buddy.id} >
        <BuddyItem buddy={buddy}  deleteBuddy={deleteBuddy}/>
      </ListItem>
    )
  )
}