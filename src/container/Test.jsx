import React from "react";
import { useSelector } from "react-redux";
import { asyncUpFetch } from "../store";

function Test() {
  const status = useSelector((state) => state.counter.status);
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          asyncUpFetch();
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
