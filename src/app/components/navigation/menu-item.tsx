export default function MenuItem({ title }: { title: string }) {
  return (
    <a
      className="bg-sky-500 hover:bg-sky-600 rounded p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out"
      href={`/#${title}`}
    >
      {title}
    </a>
  );
}
