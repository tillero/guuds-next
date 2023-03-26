const Checkbox = ({
  className,
  label,
  name,
}: {
  className?: string;
  label: string;
  name: string;
}) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        value="true"
        name={name}
        id={name}
        className="absolute h-4 w-4 appearance-none cursor-pointer after:h-5 after:w-5 before:bg-white before:absolute before:h-4 before:top-1 before:w-4 before:border-solid before:border-grey before:border after:absolute after:checked:bg-[url('/icons/check.svg')] after:bg-no-repeat after:bg-[length:17px_15px] after:bg-[center_bottom_3px]"
      ></input>
      <label className="text-black pl-6">{label}</label>
    </div>
  );
};

export default Checkbox;
