// import { Metadata } from "next";

// export const metadata: Metadata = { title: "About Me" };

export default function About() {
  return (
    <div className="bg-slate-950">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <div
        id="About"
        className="flex flex-col justify-center items-center h-fit"
      >
        <p className="text-4xl">About Me</p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-3/4 h-1 my-8 bg-orange-300 border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-slate-950 left-1/2">
            <svg
              className="w-9 h-9 text-yellow-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.99 9a1 1 0 0 1 1-1H9a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-5.506 7.216A5.5 5.5 0 0 1 6.6 13h10.81a5.5 5.5 0 0 1-8.916 3.216Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-3/4">
          <p className="flex justify-center text-xl p-2 m-6 leading-loose">
            My professional background is in the public sector, NHS and the care
            industry, where I have gleaned great personal satisfaction impacting
            change both individually and on a broader scale.
          </p>
          <p className="flex justify-center text-xl p-2 m-6 leading-loose">
            Having always been interested in technology, I started playing
            around with some courses in my spare time, finally leading me to
            take the leap and take a career break to embark on an intensive
            software development bootcamp with Northcoders.
          </p>
          <p className="flex justify-center text-xl p-2 m-6 leading-loose">
            Throughout this transformative experience I was lucky to meet some
            inspiring and talented people, and am now eagerly persuing my first
            developer role. I hope to channel my new-found skills into building
            things with a positive impact.
          </p>
          <span className="flex justify-center">
            <svg
              className="w-8 h-8 text-blue-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
