import TextInput from "@/components/TextInput";

const HeroSearchBox = () => {
  return (
    <div className="bg-white xl:rounded-md">
      <h2>Finde die besten Produkte in deiner Gegend</h2>
      <form>
        <TextInput name="hello" />
        <input
          className="h-8 w-12 bg-blue"
          type="submit"
          value="Karte"
          formAction="/karte"
        ></input>
        <input
          className="h-8 w-12 bg-yellow"
          type="submit"
          value="Shop"
          formAction="/shop"
        ></input>
      </form>
    </div>
  );
};

export default HeroSearchBox;
