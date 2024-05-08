import SkillsList from "@/app/static/SkillsList";

//refactoring - make the returning of the Image into a function that reads the files in the icons/techstack file so i am not repeating code

export default function Skills() {
  return (
    <div
      id="Skills"
      className="bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <img
        className="w-full h-36 mobile:h-20"
        src="/transitions/transition_block_colour.svg"
        alt="transition"
      />
      <div className="flex flex-col justify-center items-center h-fit">
        <h2 className="desktop:text-4xl mobile:text-3xl">Skills</h2>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-3/4 h-[0.5vh] my-8 bg-orange-300 border-0 rounded" />
        </div>
        <div className="p-16 text-wrap desktop:text-md mobile:text-xs mobile:p-6">
          <SkillsList />
        </div>
      </div>
    </div>
  );
}
