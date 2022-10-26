import { useEffect } from "react";

export default function Wave() {
  useEffect(() => {}, []);
  return (
    <div className='absolute left-0 top-0'>
        <div className='absolute z-20 w-screen h-screen bg-black opacity-30'></div>
      <canvas className="absolute w-screen h-screen" id="c"></canvas>
    </div>
  );
}
