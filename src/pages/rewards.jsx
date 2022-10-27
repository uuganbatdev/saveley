import React from "react";

export default function Rewards() {
  return (
    <div className="flex flex-col space-y-5">
      {rewards.map((reward, index) => (
        <div
          key={index}
          class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-gray-700 border-gray-700"
        >
          <div>
            <img
              className="rounded-t-md w-full h-44 object-cover"
              src={reward.img}
              alt=""
            />
          </div>
          <div className="p-6">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {reward.text}
            </p>
            <div className="flex items-center justify-between">
              <div className="px-2 py-1 text-sm bg-main/90 rounded-full flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="white"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <div className="font-medium text-white">{reward.tax}</div>
              </div>
              <p
                href="#"
                class="inline-flex items-center  py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Дэлгэрэнгүй
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>

            <p className="text-white mt-2 font-medium">{reward.byWho}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const rewards = [
  {
    text: "Ногоон орчныг хэрхэн дэмжих түүнд хэрхэн үр дүнтэй оролцох.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1I5Uauf542HSTBStEU6ZfQ4rIaRmOOKOHCA&usqp=CAU",
    byWho: "Амараа",
    tax: 500,
  },
  {
    text: "Бүжиглэх хүсэлтэй ч бүжиглэж чаддаггүй, бүжиглэх чадвараа дээшлүүлэх зорилготой хүн болгонд нээлттэй шүү",
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/8853/conversions/rhythmic-dancing-shiloette-iStock_000087684873_Medium-thumb.jpg",
    byWho: "Мөнхоргил",
    tax: 2000,
  },

  {
    text: "Тус сургалтаар та ✅Хөрөнгө боловсруулах ✅Талхны зуурмаг бэлдэх ✅Талх эвхэх техник ✅Үрээр зуурах",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT575kfomcC7XteacxAAteanFFiZWEZUsYBs1W3N6uD&s",
    byWho: "Ууганбат",
    tax: 1500,
  },
];
