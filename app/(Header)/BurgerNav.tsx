"use client";

import { useState } from "react";
import BurgerIcon from "./BurgerIcon";

const BurgerNav = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="md:hidden pl-4" onClick={() => setOpen(!open)}>
        <BurgerIcon open={open} />
      </button>
      {open && (
        <div className="bg-white absolute top-16 w-screen z-0 shadow-inner md:hidden">
          {children}
        </div>
      )}
    </>
  );
};

export default BurgerNav;
