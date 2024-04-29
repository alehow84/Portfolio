"use client";
import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "podcast enthusiast",
        500,
        "voracious meme-consumer",
        500,
        "patron of puns",
        500,
        "mother of cats",
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        fontSize: "2.5em",
        color: "white",
        lineHeight: "2.3em",
      }}
      repeat={1}
    />
  );
}
