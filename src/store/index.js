// Test.js
// redux toolkit 비동기 참고용 함수
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch",
  async () => {
    const res = await fetch("http://");
    const data = await res.json();
    // return이 action.payload가 됨.
    return data.value;
  }
);

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
    status: "welcome",
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      // 로딩스크린
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
      // 로딩스크린 끄기
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = "error";
    });
  },
});

const store = configureStore({
  counter: counterSlice.reducer,
});

export default store;
