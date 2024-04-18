export default function Navbar() {
  //here i need to create a function to pull in the title of the parts of the portfolio website, turn it into an array and for each section, replicate a span item with a particular class name

  return (
    <nav className="flex p-4 bg-gray-50">
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5">
        Home
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5">
        About
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5">
        Skills
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5">
        Projects
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5">
        Contact Me
      </span>
    </nav>
  );
}
