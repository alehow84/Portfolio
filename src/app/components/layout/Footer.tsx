import SocialMedia from "@/app/static/SocialMedia";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gradient-to-r from-pink-700 to-gradientRight h-max text-white">
      <SocialMedia size={30} />
    </footer>
  );
}
