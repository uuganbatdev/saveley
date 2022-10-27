import React from "react";

export default function Leaderboard() {
  return (
    <div className="text-white text-center space-y-5 font-medium">
      {users.map((user, index) => (
        <div key={index} className="w-full shadow-md h-16 rounded-full bg-white flex justify-between">
          <div className="font-medium space-x-4 text-medium text-base rounded-full text-white bg-white text-main border border-gray-500 px-5 flex-1 flex items-center">
            <div className="bg-main w-6 h-6 rounded-full text-white">{index + 1}</div>
            <div className="leading-4 text-left">
              <div>{user.name}</div>
              <div className="text-sm">{user.date}</div>
            </div>
          </div>
          <div className="text-main leading-4 text-sm text-center flex flex-col justify-center ml-3 mr-5">
            <div>{user.value}</div>
            <div>литр ус</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const users = [
  {
    name: "M.Enkhamgalan",
    date: "2022-05-06",
    value: 13000,
  },
  {
    name: "G.Munkhod",
    date: "2022-02-02",
    value: 12500,
  },
  {
    name: "M.Bolortoli",
    date: "2022-08-01",
    value: 12400,
  },
  {
    name: "D.Ankhbayasgalan",
    date: "2022-02-16",
    value: 12000,
  },
  {
    name: "B.Battulga",
    date: "2022-09-26",
    value: 12000,
  },
  {
    name: "B.Buri",
    date: "2022-12-06",
    value: 10000,
  },
  {
    name: "O.Munkhzorig",
    date: "2022-10-12",
    value: 5000,
  },
  {
    name: "J.Amarzaya",
    date: "2022-03-11",
    value: 4900,
  },
  {
    name: "A.Amartuvshin",
    date: "2022-03-11",
    value: 1000,
  },
];
