"use client";

/*
  -use effect listening to rerender when isContactOpen changes, inside, conditional logic, if isContactOpen is true, add class overflow-y-hidden
  - else remove that class
  - render the contact button
  */

import { useGlobalState } from "../contexts/GlobalStateContext";
import { useEffect } from "react";

export default function ContactButton({ title }: { title: string }) {
  const { isContactOpen, toggleContact, exitContact } = useGlobalState();

  function handleClick() {
    exitContact();
    toggleContact();
  }

  useEffect(() => {
    if (isContactOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isContactOpen]);

  return (
    <button>
      <div
        className={
          "bg-slate-950 border-4 hover:border-black hover:bg-gray-50 text-white hover:text-black rounded-full p-3 ml-1.5 mr-1.5 transition duration-150 ease-in-out"
        }
        onClick={handleClick}
      >
        {title}
      </div>
    </button>
  );
}
