// export const ADD_CHAT = "CHATS::ADD_CHAT";
// export const DELETE_CHAT = "CHATS::DELETE_CHAT";
//
// export const addChat = (name) => ({
//   type: ADD_CHAT,
//   payload: name,
// });
//
// export const deleteChat = (name) => ({
//   type: DELETE_CHAT,
//   payload: name,
// });

export const INIT_MESSAGES_STORE = 'MESSAGES::INIT_MESSAGES_STORE';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const initMessagesStore = (buddyName) => ({
  type: INIT_MESSAGES_STORE,
  payload: buddyName
});

export const addMessage = (message, buddy) => ({
  type: ADD_MESSAGE,
  payload: {message, buddy}
});