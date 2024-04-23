import Image from "next/image";
import SocialMedia from "@/app/static/SocialMedia";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-screen">
        <div className="flex-col">
          <Image
            src="/images/profile-pic.png"
            alt="photo of Alex Howlett"
            width={350}
            height={350}
            className="rounded-full mt-20 mb-20"
          />
          <SocialMedia size={50} />
        </div>
        <div className="flex-col">
          <h1 className="text-8xl">Hi, I'm Alex</h1>
          <p className="text-6xl">Random facts about me</p>
          <p className="text-3xl">Mother of cats</p>
        </div>
      </div>
    </>
  );
}
