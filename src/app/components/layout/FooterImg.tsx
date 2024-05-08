export default function FooterImg() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <img
          className="w-full h-36 mobile:h-20"
          src="/transitions/transition_block_colour.svg"
          alt="transition"
        />
        <div
          id="Contact"
          className="flex justify-center items-center h-16"
        ></div>
      </div>
    </>
  );
}
