"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingAbout() {
  return (
    <TypeAnimation
      sequence={[
        `My professional background is in the public sector, NHS and the care
        industry, where I have gleaned great personal satisfaction impacting
        change both individually and on a broader scale.`,
        1000,
        `Having always been
        interested in technology, I started playing around with some courses
        in my spare time, finally leading me to take the leap and take a
        career break to embark on an intensive software development bootcamp
        with Northcoders.`,
        1000,
        `Throughout this transformative experience I was
        lucky to meet some inspiring and talented people, and am now eagerly
        persuing my first developer role.`,
        1000,
        `I hope to channel my new-found
        skills and passion into building things with a positive impact.`,
      ]}
      wrapper="span"
      speed={80}
      preRenderFirstString={true}
      style={{
        fontSize: "2em",
        color: "white",
        lineHeight: "2em",
      }}
      //   omitDeletionAnimation={true}
      deletionSpeed={80}
    />
  );
}
