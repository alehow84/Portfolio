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
      <div id="About" className="flex justify-center items-center h-screen">
        About Me
      </div>
    </div>
  );
}
