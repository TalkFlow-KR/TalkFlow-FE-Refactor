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
    console.log("async start");
    // const res = await fetch(
    //   `https://api.countapi.xyz/hit/${encodeURIComponent(
    //     "http://localhost:3000"
    //   )}/get/test`
    const res = await fetch(
      "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
      // CORS / 500 에러 뜸 비동기 테스트만 할 것
    );
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
      console.log("test start");
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
  reducer: { counter: counterSlice.reducer },
});

export default store;
