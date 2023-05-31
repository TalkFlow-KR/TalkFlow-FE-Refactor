import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpFetch } from "../store";

function Test() {
  const status = useSelector((state) => state.counter.status);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log("button clicked");
          dispatch(asyncUpFetch());
        }}
      >
        + async Thunk
      </button>
      <div>
        {count} | {status}
      </div>
    </>
  );
}

export default Test;
