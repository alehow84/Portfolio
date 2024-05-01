import Image from "next/image";
//need to make svg size responsive - make width of each button a vw ?
export default function SkillsList() {
  return (
    <div className="grid grid-cols-4 gap-16">
      <button className="p-4 rounded-lg bg-pink-700 op-10 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/programming.svg"
            alt="pair & mob programming"
            width={23}
            height={23}
          />
        </div>
        Pair & Mob programming
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/agile.svg"
            alt="pair & mob agile"
            width={20}
            height={20}
          />
        </div>
        Agile
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/technical-comms.svg"
            alt="technical comms"
            width={20}
            height={20}
          />
        </div>
        Technical Communication
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/node.svg"
            alt="node.js"
            width={20}
            height={20}
          />
        </div>
        Node.js
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/javascript.svg"
            alt="javascript"
            width={20}
            height={20}
          />
        </div>
        Javascript
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/typescript.svg"
            alt="typescript"
            width={20}
            height={20}
          />
        </div>
        Typescript
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/html.svg"
            alt="html"
            width={20}
            height={20}
          />
        </div>
        HTML
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/css.svg"
            alt="css"
            width={20}
            height={20}
          />
        </div>
        CSS
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/tailwind.svg"
            alt="tailwind"
            width={25}
            height={25}
          />
        </div>
        Tailwind
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/react.svg"
            alt="react"
            width={23}
            height={23}
          />
        </div>
        React
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/react-native.svg"
            alt="react-native"
            width={23}
            height={23}
          />
        </div>
        React Native
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <div className="bg-white rounded-full">
            <Image
              src="/icons/techstack/next-js.svg"
              alt="next-js"
              width={24}
              height={24}
            />
          </div>
        </div>
        Next.js
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/sql.svg"
            alt="postgressql"
            width={25}
            height={25}
          />
        </div>
        SQL
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <div className="bg-white rounded-full">
            <Image
              src="/icons/techstack/express.svg"
              alt="express"
              width={23}
              height={23}
            />
          </div>
        </div>
        Express
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <div className="bg-blue-100 rounded-full p-0.5">
            <Image
              src="/icons/techstack/jest.svg"
              alt="jest"
              width={23}
              height={23}
            />
          </div>
        </div>
        Jest
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center">
        <div className="mobile:hidden p-2">
          <div className="bg-orange-200 rounded-full">
            <Image
              src="/icons/techstack/firebase.svg"
              alt="firebase"
              width={23}
              height={23}
            />
          </div>
        </div>
        Firebase
      </button>
    </div>
  );
}
