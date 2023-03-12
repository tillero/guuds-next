import TextInput from "@/components/TextInput";
import Checkboxes from "@/components/HeroCategorySelection";

const HeroSearchBox = () => {
  return (
    <div className="bg-white xl:rounded-md">
      <h2 className="text-black text-2xl font-serif p-4">
        Finde die besten Produkte in deiner Gegend
      </h2>
      <form className="">
        {/*<TextInput name="hello" />
        <input
          className="h-8 w-12 bg-blue"
          type="submit"
          value="Karte"
          formAction="/karte"
        ></input>
        <button
          className="h-8 w-12 bg-yellow"
          type="submit"
          value="Shop"
          formAction="/shop"
  ></button>*/}
        <Checkboxes />
      </form>
    </div>
  );
};

export default HeroSearchBox;
