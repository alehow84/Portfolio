import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-screen">
        <div className="flex-col flex-1 justify-center">
          <img
            src="/images/profile-pic.png"
            alt="photo of Alex Howlett"
            className="w-2/3 h-2/3 m-auto rounded-full mt-20 mb-20 shadow-2xl"
          />
          <SocialMedia size={50} />
        </div>
        <div className="flex-col flex-1 mr-10 ml-10">
          <h1 className="text-8xl leading-relaxed underline decoration-dotted decoration-blue-100">
            Hi, I'm Alex
          </h1>
          <p className="text-6xl leading-snug text-emerald-50">
            I'm a junior full stack developer &
          </p>
          {/* <p className="text-4xl">Mother of cats</p> */}
          <Typing />
        </div>
      </div>
    </>
  );
}
