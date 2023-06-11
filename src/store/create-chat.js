import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "",
  selectedTheme: "",
  selectedPartner: "",
  setCurrentX: "0",
  isSelectedAll: false,
};

const createChatSlice = createSlice({
  name: "createChat",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
    setMount: (state, action) => {
      state.selectedPartner = action.payload;
    },
  },
});

export const createChatActions = createChatSlice.actions;
export default createChatSlice;
