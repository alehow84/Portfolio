//have to make this a client component bc hooks can only be utilised client-side
"use client";
import MenuItem from "../menu/elements/MenuItem";
import UseScrollFade from "@/hooks/useScrollFade";
import Burger from "../menu/elements/Burger";

export default function Navbar() {
  const isAtTop = UseScrollFade();
  return (
    <nav
      className={`sticky -mt-14 top-0 z-50 text-[1.5vw]
      ${
        isAtTop
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      } flex w-full p-4 bg-gradient-to-r from-pink-700 to-gradientRight`}
    >
      <MenuItem title={"Home"} />
      <MenuItem title={"About"} />
      <MenuItem title={"Skills"} />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Contact"} />
      {/* <Burger /> */}
    </nav>
  );
}
