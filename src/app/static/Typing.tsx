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
    />
  );
}

// export function Typing2({ sequence }: { sequence: [string, number] }) {}
//refactoring idea -  to make the typing component resuseable, and store the sequence array in their own file
//learn how to do this with typescript
