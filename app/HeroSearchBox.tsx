import TextInput from "@/components/TextInput";
import Checkboxes from "@/components/HeroCategorySelection";
import AutoComplete from "@/components/AutoComplete";
import Button from "@/components/Button";

const HeroSearchBox = () => {
  return (
    <div className="bg-white md:rounded-md pb-4">
      <h2 className="text-black text-lg sm:text-xl md:text-2xl font-serif p-4">
        Finde die besten Produkte in deiner Gegend
      </h2>
      <form className="">
        <div className="grid-cols-12 grid gap-6 px-4">
          <AutoComplete
            name="location"
            label="Wo suchst du?"
            placeholder="Ort, PLZ"
            className="col-span-5"
          />
          <TextInput
            name="term"
            label="Stichwortsuche"
            placeholder="Apfel, Bäckerei, Firma"
            className="col-span-7"
          />
        </div>
        <Checkboxes />
        <div className="h-11 flex justify-end px-4 gap-3">
          <Button
            className="h-full w-40"
            label="Im Shop suchen"
            type="submit"
            value="Shop"
            formAction="/shop"
            secondary
          />
          <Button
            className="h-full w-40"
            label="Auf Karte suchen"
            type="submit"
            value="Karte"
            formAction="/karte"
            primary
          />
        </div>
      </form>
    </div>
  );
};

export default HeroSearchBox;
