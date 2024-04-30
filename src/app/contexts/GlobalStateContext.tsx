"use client";

import React, { createContext, useState, useContext } from "react";
import { GlobalState } from "../types/types.d";

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }: { children: any }) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    //here i name a parameter and then tell the state to set it to the opposite of what it was previously
    setMenuOpen((prevState) => !prevState);
  };

  const exitMenu = (): void => {
    setMenuOpen(false);
  };

  const value: GlobalState = {
    isMenuOpen,
    toggleMenu,
    exitMenu,
  };

  //make the values accessible to all children components wrapped in the GlobalStateContext
  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}
