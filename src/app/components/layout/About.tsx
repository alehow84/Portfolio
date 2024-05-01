// import { Metadata } from "next";

// export const metadata: Metadata = { title: "About Me" };

import Summary from "@/app/static/Summary";
export default function About() {
  return (
    <div id="About" className="bg-slate-950">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <div className="flex flex-col justify-center items-center h-fit">
        <p className="text-[2.25vw]">About Me</p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-3/4 h-1 my-8 bg-orange-300 border-0 rounded" />
          <div className="absolute px-[1vw] -translate-x-1/2 bg-slate-950 left-1/2">
            <svg
              className="w-[2.5vw] h-[2.5vw] text-yellow-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.99 9a1 1 0 0 1 1-1H9a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-5.506 7.216A5.5 5.5 0 0 1 6.6 13h10.81a5.5 5.5 0 0 1-8.916 3.216Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-3/4">
          <Summary />
          <div className="flex justify-center">
            <svg
              className="w-[2.25vw] h-[2.25vw] text-blue-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
