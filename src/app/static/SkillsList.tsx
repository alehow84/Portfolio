import Image from "next/image";
//need to make svg size responsive - make width of each button a vw ?
export default function SkillsList() {
  return (
    <div className="grid grid-cols-4 gap-16">
      <button className="p-4 rounded-lg bg-pink-700 op-10 shadow-md inline-flex justify-center">
        <Image
          src="/icons/skills/programming.svg"
          alt="pair & mob programming"
          width={25}
          height={25}
        />
        Pair & Mob programming
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/skills/agile.svg"
          alt="pair & mob agile"
          width={25}
          height={25}
        />
        Agile
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/skills/technical-comms.svg"
          alt="technical comms"
          width={25}
          height={25}
        />
        Technical Communication
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/node.svg"
          alt="node.js"
          width={25}
          height={25}
        />
        Node.js
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/javascript.svg"
          alt="javascript"
          width={25}
          height={25}
        />
        Javascript
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/typescript.svg"
          alt="typescript"
          width={25}
          height={25}
        />
        Typescript
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/html.svg"
          alt="html"
          width={25}
          height={25}
        />
        HTML
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/css.svg"
          alt="css"
          width={25}
          height={25}
        />
        CSS
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/tailwind.svg"
          alt="tailwind"
          width={25}
          height={25}
        />
        Tailwind
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/react.svg"
          alt="react"
          width={25}
          height={25}
        />
        React
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/react-native.svg"
          alt="react-native"
          width={25}
          height={25}
        />
        React Native
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="bg-white rounded-full">
          <Image
            src="/icons/techstack/next-js.svg"
            alt="next-js"
            width={25}
            height={25}
          />
        </div>
        Next.js
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <Image
          src="/icons/techstack/sql.svg"
          alt="postgressql"
          width={25}
          height={25}
        />
        SQL
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="bg-white rounded-full">
          <Image
            src="/icons/techstack/express.svg"
            alt="express"
            width={25}
            height={25}
          />
        </div>
        Express
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="bg-blue-100 rounded-full p-0.5">
          <Image
            src="/icons/techstack/jest.svg"
            alt="jest"
            width={25}
            height={25}
          />
        </div>
        Jest
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="bg-orange-200 rounded-full">
          <Image
            src="/icons/techstack/firebase.svg"
            alt="firebase"
            width={25}
            height={25}
          />
        </div>
        Firebase
      </button>
    </div>
  );
}
