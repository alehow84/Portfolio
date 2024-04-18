import MenuItem from "../navigation/menu-item";
export default function Navbar() {
  return (
    <nav className="flex p-4 bg-gray-50">
      <MenuItem title={"Home"} />
      <MenuItem title={"About"} />
      <MenuItem title={"Skills"} />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Contact"} />
    </nav>
  );
}
