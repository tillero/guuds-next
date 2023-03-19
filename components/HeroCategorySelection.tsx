import { CategoryCheckbox, Category } from "./CategoryCheckbox";

const HeroCategorySelection = () => {
  return (
    <div className="grid grid-cols-3 place-items-center sm:flex sm:justify-between p-4 gap-2">
      <CategoryCheckbox category={Category.Lebensmittel} />
      <CategoryCheckbox category={Category.Kleidung} />
      <CategoryCheckbox category={Category.Körperpflege} />
      <CategoryCheckbox category={Category.Einrichtung} />
      <CategoryCheckbox className="" category={Category.Haushalt} />
      <CategoryCheckbox
        className="sm:max-lg:hidden"
        category={Category.Freizeit}
      />
    </div>
  );
};

export default HeroCategorySelection;
