// import { Metadata } from "next";

// export const metadata: Metadata = { title: "Contact Me" };

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <img
        className="w-full h-44"
        src="/transitions/transition_block_colour.svg"
        alt="transition"
      />
      <div id="Contact" className="flex justify-center items-center h-screen">
        Contact Me
      </div>
    </div>
  );
}
