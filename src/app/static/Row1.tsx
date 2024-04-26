import { SkillsRow1 } from "../components/Skills/SkillsObj";
import Image from "next/image";
/* this component doesn't work */
export default function Row1() {
  return Object.keys(SkillsRow1).forEach((key) => {
    return (
      <div className="flex flex-col justify-center items-center rounded-md">
        <Image
          src={`${SkillsRow1[key].fileName}`}
          alt={`${SkillsRow1[key].name}`}
          width={30}
          height={30}
        />
        <p className="text-l">{SkillsRow1[key].name}</p>
      </div>
    );
  });
}
