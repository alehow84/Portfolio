// import { Metadata } from "next";

// export const metadata: Metadata = { title: "Projects" };

/*
-Create json with data i want to use in my pagination reel and import it here
- json must be an array of objects with the same structure
- save screenshots of my projects in public file
- for each json object:
    -div container with rounded border to contain the "card"
    - link tag containing an image with the project screenshot
    - div containing a 1.project title tag 2.link tag with github repo link
*/

export default function Projects() {
  return (
    <div id="Projects" className="bg-slate-950">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <div className="flex flex-col justify-center items-center h-fit">
        <p className="text-[2.25vw]">Projects</p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-3/4 h-1 my-8 bg-orange-300 border-0 rounded" />
          <div className="absolute px-[1vw] -translate-x-1/2 bg-slate-950 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[2.5vw] h-[2.5vw] text-blue-300"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25Zm4.03 6.28a.75.75 0 0 0-1.06-1.06L4.97 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06L6.56 10l1.72-1.72Zm4.5-1.06a.75.75 0 1 0-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        {/* for each json object, return styling as noted in comments above */}
      </div>
    </div>
  );
}
