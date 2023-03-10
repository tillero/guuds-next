import HeroSearchBox from "./HeroSearchBox";

export default function Home() {
  return (
    <div className="bg-[url('/images/bread1_m.jpg')]">
      <div className="xl:w-3/5">
        <h1 className="font-serif text-white">
          Die Informationsplattform für lokalen Konsum
        </h1>
        <HeroSearchBox />
      </div>
    </div>
  );
}
