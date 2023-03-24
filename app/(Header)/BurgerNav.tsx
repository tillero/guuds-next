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
        <div className="bg-white absolute top-16 w-screen z-20 shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.05),0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] md:hidden">
          {children}
        </div>
      )}
    </>
  );
};

export default BurgerNav;
