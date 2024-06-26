import Image from "next/image";

export default function SocialMedia({ size }: { size: number }) {
  return (
    <div className="flex justify-center pb-5 gap-5">
      <a
        href="https://www.linkedin.com/in/alexandra-howlett-2b4a90136/"
        className="bg-black bg-opacity-90 p-6 rounded-full transition-all ml-1 mr-1 hover:scale-110 scale-100"
        target="_blank"
      >
        <Image
          src="/icons/social/linkedIn.svg"
          alt="linkedIn link"
          width={size}
          height={size}
        />
      </a>
      <a
        href="https://github.com/alehow84"
        className="bg-black bg-opacity-90 p-6 rounded-full transition-all ml-1 mr-1 hover:scale-110 scale-100"
        target="_blank"
      >
        <Image
          src="/icons/social/github.svg"
          alt="github link"
          width={size}
          height={size}
        />
      </a>
    </div>
  );
}
