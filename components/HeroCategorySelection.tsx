import { CategoryCheckbox, Category } from "./CategoryCheckbox";

const HeroCategorySelection = () => {
  return (
    <div className="flex justify-between p-4 flex-wrap gap-3">
      <CategoryCheckbox category={Category.Lebensmittel} />
      <CategoryCheckbox category={Category.Kleidung} />
      <CategoryCheckbox category={Category.Körperpflege} />
      <CategoryCheckbox category={Category.Einrichtung} />
      <CategoryCheckbox category={Category.Haushalt} />
      <CategoryCheckbox category={Category.Freizeit} />
    </div>
  );
};

export default HeroCategorySelection;
