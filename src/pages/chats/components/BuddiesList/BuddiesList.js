import {ListItem} from "@mui/material";
import BuddyItem from "../BuddyItem/BuddyItem";
import {useSelector} from "react-redux";
import {selectBuddies} from "../../../../store/chats/selectors";


export default function BuddiesList() {

  const buddies = useSelector(selectBuddies);

  if (buddies) {
    return (
      buddies.map((buddyId) =>
        <ListItem key={buddyId} >
          <BuddyItem buddyId={buddyId}/>
        </ListItem>
      )
    )
  } else {
    return (
      <></>
    );
  }

}