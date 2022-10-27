import { AppContext } from "../App";
import { useContext } from "react";
import YouTube from "react-youtube";

export default function Home() {
  const { appState } = useContext(AppContext);
  return (
    <div className="mt-4 text-white flex flex-col">
      <div className="shadow-md text-6xl font-medium w-54 mx-auto text-white rounded-xl w-full pt-6 text-center pb-10">
        <div className="text-base">Нийт</div>
        <div className="tracking-wide">1200</div>
        <div className="text-base font-normal">литр ус хэмнэсэн</div>
      </div>
      <div className="mt-8 space-y-5">
        {savings.map((item, index) => (
          <div key={index} className="w-full shadow-md h-16 rounded-full bg-white flex justify-between">
            <div className="font-medium text-xs rounded-full text-white bg-gray-700 border border-gray-500 px-5 flex-1 flex items-center">
                {item.text}
            </div>
            <div className="text-main leading-4 text-sm text-center flex flex-col justify-center mx-1">
              <div>{item.value}</div>
              <div>литр ус</div>
            </div>
            <div className="shadow-l-md w-12 rounded-r-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#374151"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto w-screen mt-8 relative px-5 -left-7">
        <div className="flex space-x-5 -left-14 ytube">
          <YouTube opts={opts} videoId="zeZ5usxeJx4" />
          <YouTube opts={opts} videoId="IfUd3whsExU" />
          <YouTube opts={opts} videoId="nTcFXJT0Fsc" />
          <YouTube opts={opts} videoId="5J3cw4biWWo" />
          <YouTube opts={opts} videoId="paVt_WZJ0B8" />
        </div>
      </div>
    </div>
  );
}

const savings = [
  {
    text: "Шүдээ угаах үедээ крантаа хаагаад аяганд ус хийж угаах",
    value: 18,
  },
  {
    text: "Ваннд усанд орохын оронд шүршүүрт бага хугацаагаар орох",
    value: 45,
  },
  {
    text: "Угаалгын машинд ашиглагдах усыг бүрэн ашиглах",
    value: 80,
  },
  {
    text: "Аяга таваг угаахдаа нийтэд нь угаах",
    value: 23,
  },
];

const opts = {
  height: "130",
  width: "230",
};
