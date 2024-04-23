import SocialMedia from "@/app/static/SocialMedia";

export default function Home() {
  return (
    <>
      <div className="flex items-center bg-gradient-to-r from-gradientLeft to-gradientRight h-screen">
        <h1>Hi, I'm Alex</h1>
        <h2>Random facts about me</h2>
        <p>Mother of cats</p>
        <SocialMedia size={90} />
      </div>
    </>
  );
}
