import React from "react";

export default function Timer({
  switchStage,
  getTickingTime,
  startTimer,
  stage,
  ticking,
  seconds,
  reset,
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="flex justify-center items-center flex-col w-11/12 sm:w-10/12 mx-auto pt-5 pb-5 rounded">
      <div className="flex flex-wrap justify-around    gap-5 text-gray-900 items-center">
        {" "}
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === stage ? "bg-gray-100" : ""
              } p-2 rounded hover:bg-gray-100 cursor-pointer  border transition-all`}
              onClick={() => switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>

      <div className="mt-10 mb-10">
        <h1 className="text-8xl  text-gray-900 select-none m-0">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          className=" px-16 py-2 text-2xl rounded-md bg-white  border-2 hover:bg-gray-100 uppercase font-semibold"
          onClick={startTimer}
        >
          {ticking ? "Stop" : "Start"}
        </button>
      </div>
      {!ticking && (
        <button
          className="uppercase text-gray-900 underline  mt-5"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
