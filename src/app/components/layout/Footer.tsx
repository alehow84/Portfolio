import SocialMedia from "@/app/static/SocialMedia";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center pt-2 bg-gradient-to-r from-pink-700 to-gradientRight h-max text-white">
      <div className="pt-2">
        <SocialMedia size={20} />
      </div>
    </footer>
  );
}
