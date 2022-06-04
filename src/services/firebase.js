// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  return await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getUsersRefById = id => ref(db, `users/${id}`);
export const getUserNickNameRefById = id => ref(db, `users/${id}/nickname`);
export const getNicknameFromNicknames = nickname => ref(db, `nicknames/${nickname}`);
export const getMessagesIdRefFromChats = (profileId, buddyId) => ref(db, `chats/${profileId}/${buddyId}`);
export const getProfileChatsRefById = (id) => ref(db, `chats/${id}`);
export const getCurrentChatRef = (profileId, buddyId) => ref(db, `chats/${profileId}/${buddyId}`);
export const getMessagesRefById = (messagesId) => ref(db, `messages/${messagesId}`);
