export enum Category {
  Lebensmittel = "groceries",
  Kleidung = "clothes",
  Körperpflege = "hygiene",
  Einrichtung = "furnishing",
  Haushalt = "household",
  Freizeit = "leisure",
}

export const CategoryCheckbox = ({ category }: { category: Category }) => {
  let content = "",
    icon = "";
  switch (category) {
    case "groceries":
      content = "after:content-['Lebensmittel']";
      icon =
        "after:bg-[url('/icons/apple-black.svg')] after:bg-[length:43px_53px]";
      break;
    case "clothes":
      content = "after:content-['Kleidung']";
      icon =
        "after:bg-[url('/icons/sweater-black.svg')] after:bg-[length:50px_50px]";
      break;
    case "hygiene":
      content = "after:content-['Körperpflege']";
      icon =
        "after:bg-[url('/icons/soap-black.svg')] after:bg-[length:43px_53px]";
      break;
    case "furnishing":
      content = "after:content-['Einrichtung']";
      icon =
        "after:bg-[url('/icons/couch-black.svg')] after:bg-[length:70px_60px]";
      break;
    case "household":
      content = "after:content-['Haushalt']";
      icon =
        "after:bg-[url('/icons/clean-black.svg')] after:bg-[length:43px_53px]";
      break;
    case "leisure":
      content = "after:content-['Freizeit']";
      icon =
        "after:bg-[url('/icons/bicycle-black.svg')] after:bg-[length:65px_60px]";
      break;
  }

  return (
    <div className="h-32 w-32 inline-block">
      <label className="">
        <input
          type="checkbox"
          name={category}
          id={category}
          value="true"
          className={
            "absolute h-32 w-32 cursor-pointer appearance-none text-black after:hover:bg-blue-light-3 text-sm after:border-solid after:rounded-md after:border-grey after:border after:bg-no-repeat after:bg-[center_top_1.5rem] after:h-32 after:absolute after:w-32 checked:after:bg-blue-light-3 checked:after:border-blue-dark-2 after:flex after:items-end after:py-4 after:justify-center " +
            content +
            " " +
            icon
          }
        ></input>
      </label>
    </div>
  );
};

export default CategoryCheckbox;
