import SocialMedia from "@/app/static/SocialMedia";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-screen">
        <div className="flex-col">
          <SocialMedia size={90} />
        </div>
        <div className="flex-col">
          <h1>Hi, I'm Alex</h1>
          <h2>Random facts about me</h2>
          <p>Mother of cats</p>
        </div>
      </div>
    </>
  );
}
