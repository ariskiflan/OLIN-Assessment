import { useEffect, useState } from "react";
import Items from "./Items";

const ReactJsAssessment = () => {
  // 1. Basic Styling
  const item = ["item 1", "item 2", "item 3"];

  //   2. State and Events
  const [count, setCount] = useState(0);

  const incerement = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //   4. Hooks
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[50px]">
      {/* 1. Basic Styling */}
      <div>
        <p className="text-[30px]">1. Basic Styling</p>
        <div className="ms-14">
          <Items listItem={item} />
        </div>
      </div>

      {/* 2. State and Events */}
      <div>
        <p className="text-[30px]">2. State and Events</p>

        <div className="ms-8">
          <p className="text-[20px] mb-[20px] font-bold">counter: {count}</p>

          <div className="flex gap-4">
            <button
              className="bg-green-500 p-[6px] rounded-md"
              onClick={incerement}
            >
              Increment
            </button>
            <button
              className="bg-red-500 p-[6px] rounded-md text-white"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

      {/* 3. Lifecycle Methods */}
      <div>
        <p className="text-[30px]">3. Lifecycle Methods</p>
        <div className="ms-8">
          <Items listItem={item} />
        </div>
      </div>

      {/* 4. Hooks */}
      <div>
        <p className="text-[30px]">4. Hooks</p>
        <div className="ms-8">
          <p className="text-[20px]">Timer: {time} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ReactJsAssessment;
