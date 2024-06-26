"use client";
import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";

export default function Home() {
  const imageStyle = {
    border: "1px solid #fff",
  };

  return (
    <div
      id="Home"
      className="flex desktop:flex-row mobile:flex-col justify-center items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-fit"
    >
      <div className="flex-col flex-1 justify-center mobile:mb-8">
        <img
          src="/images/profile-pic.png"
          alt="photo of Alex Howlett"
          className="w-3/5 m-auto rounded-full mt-28 shadow-2xl mobile:w-2/5 mobile:mt-14"
        />

        <div className="mt-10 mb-28 mobile:hidden">
          <SocialMedia size={50} />
        </div>
      </div>
      <div className="flex-col flex-1 mr-10 ml-10 mb-24 pointer-events-none mobile:mb-0 mobile:ml-24 mobile:">
        <h1 className="text-white leading-loose underline decoration-double decoration-blue-200 desktop:text-[6vw] mobile:text-5xl">
          Hi, I&apos;m Alex
        </h1>
        <div className="desktop:text-[4vw] text-emerald-50 mobile:pb-10 mobile:text-3xl mobile:pt-6">
          <p className="leading-snug">
            I&apos;m a junior full stack developer &
          </p>
          <Typing />
        </div>
      </div>
    </div>
  );
}
