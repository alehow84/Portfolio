"use client";
import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";

export default function Home() {
  return (
    <div
      id="Home"
      className="flex flex-row justify-center items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-fit"
    >
      <div className="flex-col flex-1 justify-center mobile:mb-16">
        <img
          src="/images/profile-pic.png"
          alt="photo of Alex Howlett"
          className="w-3/5 m-auto rounded-full mt-28 shadow-2xl"
        />
        <div className="mobile:hidden mt-10 mb-28">
          <SocialMedia size={50} />
        </div>
      </div>
      <div className="flex-col flex-1 mr-10 ml-10 mb-24 pointer-events-none mobile:mb-0">
        <h1 className="text-[6vw] leading-relaxed underline decoration-double decoration-blue-200">
          Hi, I'm Alex
        </h1>
        <div className="text-[4vw] leading-snug text-emerald-50">
          I'm a junior full stack developer &
          <Typing />
        </div>
      </div>
    </div>
  );
}
