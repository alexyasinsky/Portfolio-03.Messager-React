import {useDispatch, useSelector} from "react-redux";

import Area from "../../components/Area/Area";
import {selectProfile} from "../../store/profile/selectors";
import {getNicknameFromNicknames, getUserNickNameRefById, logOut} from "../../services/firebase";
import {ProfileForm} from "./components/ProfileForm/ProfileForm";
import {useEffect, useState} from "react";
import {clearProfile, initProfileTrack, stopProfileTrack} from "../../store/profile/actions";
import {Avatar, Box, Button, Modal, Typography} from "@mui/material";
import {set} from "@firebase/database";
import {clearChatsStore} from "../../store/chats/actions";


export default function Profile () {

  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleSubmit = (nickname) => {
      set(getUserNickNameRefById(profile.id), nickname);
      set(getNicknameFromNicknames(nickname), profile.id);
  };

  const handleQuit = () => {
    logOut().then(()=> {
      dispatch(clearProfile());
      dispatch(clearChatsStore())
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

  const [openModalWindow, setOpenModalWindow] = useState(false);
  const handleOpenModalWindow = () => setOpenModalWindow(true);
  const handleCloseModalWindow = () => setOpenModalWindow(false);

  const modalWindowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Area height={650}>

      <div style={ProfileCardStyle}>
        <Avatar alt={profile.nickname} src={profile.avatar} sx={{ width: 120, height: 120 }}/>
        <Typography variant='h4'>Привет, {profile.nickname}!</Typography>
        <Button onClick={handleOpenModalWindow}>Изменить ник</Button>
        <Modal
          open={openModalWindow}
          onClose={handleCloseModalWindow}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalWindowStyle}>
            <ProfileForm
              onSubmit={handleSubmit}
            />
          </Box>
        </Modal>
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