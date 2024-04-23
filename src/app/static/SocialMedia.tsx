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
          src="/icons/linkedIn.svg"
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
          src="/icons/github.svg"
          alt="github link"
          width={size}
          height={size}
        />
      </a>
      <a
        href=""
        className="bg-black bg-opacity-90 p-6 rounded-full transition-all ml-1 mr-1 hover:scale-110 scale-100"
        target="_blank"
      >
        <Image
          src="/icons/email.svg"
          alt="send-email link"
          width={size}
          height={size}
        />
      </a>
    </div>
  );
}

//make sure to render the SocialMedia Component in Home and Footer Components
