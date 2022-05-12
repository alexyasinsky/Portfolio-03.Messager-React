export const selectMessages = state => state.messages;
export const selectMessagesByBuddyName = name => state => state.messages[name];
