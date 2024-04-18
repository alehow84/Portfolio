export default function Navbar() {
  //here i need to create a function to pull in the title of the parts of the portfolio website, turn it into an array and for each section, replicate a span item with a particular class name

  return (
    <nav className="flex p-4 bg-gray-50">
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        Home
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        About
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        Skills
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        Projects
      </span>
      <span className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        Contact Me
      </span>
    </nav>
  );
}
