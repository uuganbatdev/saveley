import { AppContext } from "../App";
import { useContext } from "react";

export default function Home() {
    const {appState} = useContext(AppContext);
    console.log(appState);
  return (
    <div className=" text-white space-y-5">
      <div className="bg-black/30 rounded-xl p-10">home</div>
      <div className="bg-black/30 rounded-xl p-10">home</div>
      <div className="bg-black/30 rounded-xl p-10">home</div>
    </div>
  );
}
