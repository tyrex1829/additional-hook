import React, { useEffect, useState } from "react";

function Functional() {
  // state of func comp
  const [count, setCount] = useState(0);

  // lifecycle of func state
  useEffect(() => {
    // this is data fetching
    console.log("Component mounted");

    return () => {
      // this is clean up
      console.log("component unmounted");
    };
  });

  return (
    <div>
      <p>This is for life cycle events</p>

      {/* this is state of functionl comp */}
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Functional;
