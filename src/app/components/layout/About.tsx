// import { Metadata } from "next";

// export const metadata: Metadata = { title: "About Me" };
import TypingAbout from "@/app/static/TypingAbout";

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
              className="w-4 h-4 text-gray-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
        <p className="flex justify-center text-2xl p-4 m-6 leading-loose">
          My professional background is in the public sector, NHS and the care
          industry, where I have gleaned great personal satisfaction impacting
          change both individually and on a broader scale.
        </p>
        <p className="flex justify-center text-2xl p-4 m-6 leading-loose">
          Having always been interested in technology, I started playing around
          with some courses in my spare time, finally leading me to take the
          leap and take a career break to embark on an intensive software
          development bootcamp with Northcoders.
        </p>
        <p className="flex justify-center text-2xl p-4 m-6 leading-loose">
          Throughout this transformative experience I was lucky to meet some
          inspiring and talented people, and am now eagerly persuing my first
          developer role. I hope to channel my new-found skills and passion into
          building things with a positive impact.
        </p>
        {/* <TypingAbout /> */}
      </div>
    </div>
  );
}
