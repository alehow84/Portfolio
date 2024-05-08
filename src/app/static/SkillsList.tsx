import Image from "next/image";
//need to make svg size responsive - make width of each button a vw ?
export default function SkillsList() {
  return (
    <div className="grid grid-cols-4 desktop:gap-11 mobile:gap-4">
      <button className="flex p-4 rounded-lg bg-pink-700 op-10 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/programming.svg"
            alt="pair & mob programming icon"
            width={23}
            height={23}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Pair & Mob programming
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/agile.svg"
            alt="agile icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Agile
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/skills/technical-comms.svg"
            alt="technical comms"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Technical Communication
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/node.svg"
            alt="node.js icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Node.js
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/javascript.svg"
            alt="javascript icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Javascript
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/typescript.svg"
            alt="typescript icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Typescript
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/html.svg"
            alt="html icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          HTML
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/css.svg"
            alt="css icon"
            width={20}
            height={20}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          CSS
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/tailwind.svg"
            alt="tailwind icon"
            width={25}
            height={25}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Tailwind
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/react.svg"
            alt="react icon"
            width={23}
            height={23}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          React
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/react-native.svg"
            alt="react-native icon"
            width={23}
            height={23}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          React Native
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <div className="bg-white rounded-full">
            <Image
              src="/icons/techstack/next-js.svg"
              alt="next-js icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Next.js
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <Image
            src="/icons/techstack/sql.svg"
            alt="postgressql icon"
            width={25}
            height={25}
          />
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          SQL
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <div className="bg-white rounded-full">
            <Image
              src="/icons/techstack/express.svg"
              alt="express icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Express
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <div className="bg-blue-100 rounded-full p-0.5">
            <Image
              src="/icons/techstack/jest.svg"
              alt="jest icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Jest
        </div>
      </button>
      <button className="p-4 rounded-lg bg-pink-700 op-65 shadow-md inline-flex justify-center pointer-events-none">
        <div className="mobile:hidden p-2">
          <div className="bg-orange-200 rounded-full">
            <Image
              src="/icons/techstack/firebase.svg"
              alt="firebase icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        <div className="text-ellipsis overflow-hidden align-center desktop:p-2 mobile:p-0.25">
          Firebase
        </div>
      </button>
    </div>
  );
}
