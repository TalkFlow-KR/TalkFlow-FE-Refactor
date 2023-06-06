import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFirstMount: true,
  messages: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessages: (state, action) => {
      const newMessage = {
        id: state.messages.length + 1,
        sender: "user",
        message: action.payload,
      };
      state.messages.push(newMessage);
    },
    setMount: (state, action) => {
      state.isFirstMount = action.payload;
    },
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice;
