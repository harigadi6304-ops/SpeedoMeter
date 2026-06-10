import React, { useState } from "react";

const SpeedoMeter: React.FC = () => {
  const [speed, setSpeed] = useState<number>(0);

  const handleAccelerate = () => {
    if (speed < 200) {
      setSpeed((prev) => prev + 10);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#07080c] px-10 py-20 box-border w-[50%] gap-6">
      <h1 className="text-white text-5xl italic uppercase font-bold font-[roboto]">
        Speedometer
      </h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="speedometer"
        // className="h-100 w-100 "
      />
      <h1 className="text-white text-3xl font-semibold font-[roboto]">
        Speed is {speed}Mph
      </h1>
      <p className="text-[#cbd5e1] text-md font-[roboto]">
        Min Limit is 0mph, Max Limit is 200mph
      </p>
      <div className="flex flex-row justify-center items-center gap-6">
        <button
          className="bg-[#0b69ff] text-white py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleAccelerate}
        >
          Accelerate
        </button>
        <button
          className="bg-black text-[#94a3b8] border border-[#94a3b8] py-2 px-4 rounded-xl cursor-pointer"
          onClick={() => setSpeed(0)}
        >
          Apply Brake
        </button>
      </div>
    </div>
  );
};

export default SpeedoMeter;
