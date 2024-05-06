"use client";

import ContactForm from "@/app/static/ContactForm";
import Close from "../menu/elements/Close";
import { useGlobalState } from "@/app/contexts/GlobalStateContext";

export default function Contact() {
  const { isContactOpen, exitContact } = useGlobalState();

  /* If contact button has been pressed and toggle open has been triggered to set is contactopen to true, then render the contact form and close button */
  return (
    <>
      {isContactOpen ? (
        <>
          <div
            className="fixed top-0 right-0 p-2 z-[101]"
            onClick={exitContact}
          >
            <Close />
          </div>
          <div className="fixed bg-black backdrop-blur-md bg-opacity-40 w-full h-screen min-h-screen z-[100]">
            <ContactForm />
          </div>
        </>
      ) : (
        <></>
      )}{" "}
    </>
  );
}
