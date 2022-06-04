import { onValue} from "@firebase/database";
import {auth, getUsersRefById} from "../../services/firebase";

export const SET_PROFILE = 'PROFILE::GET_PROFILE';
export const CLEAR_PROFILE = 'PROFILE::CLEAR_PROFILE';

const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE,
});

let unsubscribe;

function getId() {
  return auth.currentUser.uid;
}

export const initProfileTrack = () => (dispatch) => {
  const id = getId();
  const unsubscribeProfile = onValue(getUsersRefById(id), snapshot => {
    const profile = snapshot.val();
    dispatch(setProfile(profile));
  });
  unsubscribe = () => {
    unsubscribeProfile();
  }
};

export const stopProfileTrack = () => () => {
  unsubscribe();
};


