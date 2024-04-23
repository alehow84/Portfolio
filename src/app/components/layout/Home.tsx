import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-screen">
        <div className="flex-col flex-1 justify-center">
          <img
            src="/images/profile-pic.png"
            alt="photo of Alex Howlett"
            className="w-3/5 m-auto rounded-full mt-40 shadow-2xl"
          />
          <div className="mt-10 mb-20">
            <SocialMedia size={50} />
          </div>
        </div>
        <div className="flex-col flex-1 mr-10 ml-10">
          <h1 className="text-8xl leading-relaxed underline decoration-dotted decoration-blue-100">
            Hi, I'm Alex
          </h1>
          <p className="text-6xl leading-snug text-emerald-50">
            I'm a junior full stack developer &
          </p>
          <Typing />
        </div>
      </div>
    </>
  );
}
