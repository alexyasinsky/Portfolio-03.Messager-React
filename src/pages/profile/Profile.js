import {useDispatch, useSelector} from "react-redux";

// import {initProfileTrack, setNameFB, setShowName, stopProfileTrack} from "../../store/profile/actions";
import Area from "../../components/Area/Area";
import {selectProfile} from "../../store/profile/selectors";
import {logOut} from "../../services/firebase";
import {ProfileForm} from "./components/ProfileForm/ProfileForm";
import {useEffect} from "react";
import {clearProfile, initProfileTrack, setNickNameFB, stopProfileTrack} from "../../store/profile/actions";
import {Avatar, Button, Typography} from "@mui/material";

export default function Profile () {

  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleSubmit = (text) => {
    dispatch(setNickNameFB(text));
  };

  const handleQuit = () => {
    logOut().then(()=> {
      dispatch(clearProfile());
    });
  }

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, [dispatch]);

  const ProfileCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }


  return (
    <Area height={650}>

      <div style={ProfileCardStyle}>
        <Avatar alt={profile.nickname} src={profile.avatar} sx={{ width: 120, height: 120 }}/>
        <Typography variant='h4'>Привет, {profile.nickname}!</Typography>
        <ProfileForm
          onSubmit={handleSubmit}
        />
      </div>
      <Button
        variant="contained"
        color='error'
        onClick={handleQuit}

      >
        Выйти из профиля
      </Button>
    </Area >
  )
}