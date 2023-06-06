import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatMessages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatMessages: (state, action) => {
      state.chatMessages = action.payload;
    },
  },
});

export const setChatMessages = chatSlice.actions;

export default chatSlice;
