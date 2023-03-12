import HeroSearchBox from "./HeroSearchBox";

export default function Home() {
  return (
    <div className="bg-[url('/images/bread1_m.jpg')]">
      <div className="xl:w-4/6 xl:container mx-auto">
        <h1 className="font-serif text-white text-3xl py-10">
          Die Informationsplattform für lokalen Konsum
        </h1>
        <HeroSearchBox />
      </div>
    </div>
  );
}
