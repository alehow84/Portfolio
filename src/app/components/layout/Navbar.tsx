import MenuItem from "../navigation/menu-item";
export default function Navbar() {
  return (
    <nav className="flex p-4 bg-gradient-to-r from-pink-700 to-gradientRight">
      <MenuItem title={"Home"} />
      <MenuItem title={"About"} />
      <MenuItem title={"Skills"} />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Contact"} />
    </nav>
  );
}
