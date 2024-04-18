export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-50 h-max text-black">
      <span className="ml-1.5 mr-1.5">Get in touch:</span>

      <span className="hover:shadow-md p-4 rounded-full ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        <svg
          className="h-8 w-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
          <rect x="2" y="9" width="4" height="12" />{" "}
          <circle cx="4" cy="4" r="2" />
        </svg>
      </span>
      <span className="hover:shadow-md p-4 rounded-full ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        <svg
          className="h-8 w-8 text-violet-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        </svg>
      </span>
      <span className="hover:shadow-md p-4 rounded-full ml-1.5 mr-1.5 transition duration-150 ease-in-out">
        <svg
          className="h-8 w-8 text-gray-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </span>
    </footer>
  );
}
