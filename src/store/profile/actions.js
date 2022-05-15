import { onValue, set } from "@firebase/database";
import {auth, db, getUserNickNameRefById, getUsersRefById} from "../../services/firebase";
import {ref} from "firebase/database";


export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const SET_NAME = "PROFILE::SET_NAME";
export const SET_PROFILE = 'PROFILE::GET_PROFILE';

export const toggleCheckBox = {
  type: TOGGLE_CHECKBOX
}

export const setNickName = (nickname) => ({
  type: SET_NAME,
  payload: nickname,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile
})


let unsubscribe;

function getId() {
  return auth.currentUser.uid;
}
//--------------------------------

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

// let unsubscribe;
//
// //--------------------------------
//
// export const initProfileTrack = () => (dispatch) => {
//   const unsubscribeName = onValue(userNameRef, (snapshot) => {
//     dispatch(setName(snapshot.val()));
//   });
//   const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
//     dispatch(toggleCheckBox);
//   });
//
//   unsubscribe = () => {
//     unsubscribeName();
//     unsubscribeShowName();
//   };
// };
//
//
export const stopProfileTrack = () => () => {
  unsubscribe();
};
//
export const setNickNameFB = (nickname) => () => {
  const id = getId();
  set(getUserNickNameRefById(id), nickname);
  set(ref(db, `nicknames/${nickname}`), id);
};
//
// export const setShowName = (value) => () => {
//   set(userShowNameRef, value);
// };