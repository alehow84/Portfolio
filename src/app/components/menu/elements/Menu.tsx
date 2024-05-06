import MenuItem from "./MenuItem";
import ContactButton from "@/app/static/ContactButton";

export default function Menu() {
  return (
    <>
      <MenuItem title={"Home"} />
      <MenuItem title={"About"} />
      <MenuItem title={"Skills"} />
      <MenuItem title={"Projects"} />
      <ContactButton title={"Get in touch"} />
    </>
  );
}
