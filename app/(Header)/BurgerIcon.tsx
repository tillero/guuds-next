interface BurgerIconProps {
  open: boolean;
}

const BurgerIcon = ({ open }: BurgerIconProps) => {
  const spanClass =
    "block absolute h-1 bg-black opacity-100 duration-200 ease-in-out";

  return (
    <div className="w-7 h-6 relative rotate-0 duration-500 ease-in-out">
      <span
        className={`${spanClass} ${
          open ? `top-2 w-0 left-1/2` : `top-0 w-full left-0`
        }`}
      ></span>
      <span
        className={`top-2 w-full ${spanClass} ${
          open ? `rotate-45` : `rotate-0`
        }`}
      ></span>
      <span
        className={`top-2 w-full ${spanClass} ${
          open ? `-rotate-45` : `rotate-0`
        }`}
      ></span>
      <span
        className={`${spanClass} ${
          open ? `top-2 w-0 left-1/2` : `top-4 w-full left-0`
        }`}
      ></span>
    </div>
  );
};

export default BurgerIcon;
