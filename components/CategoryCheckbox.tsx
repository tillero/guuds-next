import Apple from "../public/icons/apple.svg";

const CategoryCheckbox = () => {
  return (
    <div className="h-32 w-32">
      <label className="">
        <input
          type="checkbox"
          name="apple"
          id="checkbox"
          value="true"
          className="absolute h-32 w-32 cursor-pointer appearance-none after:hover:bg-yellow after:border-solid after:rounded after:border-black after:border-2 after:bg-[url('/icons/apple-black.svg')] after:bg-[length:43px_53px] after:bg-no-repeat after:bg-[center_top_1.5rem] after:h-32 after:absolute after:w-32 checked:after:bg-red after:content-['Lebensmittel'] after:top"
        ></input>
      </label>
    </div>
  );
};

export default CategoryCheckbox;
