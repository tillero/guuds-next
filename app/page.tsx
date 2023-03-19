import HeroSearchBox from "./HeroSearchBox";

export default function Home() {
  return (
    <div className="md:bg-[url('/images/bread1_m.jpg')]">
      <div className="lg:w-4/6 md:container md:mx-auto lg:min-w-max">
        <h1 className="font-serif text-white text-xl sm:text-2xl md:text-3xl py-10 max-md:hidden">
          Die Informationsplattform für lokalen Konsum
        </h1>
        <HeroSearchBox />
      </div>
    </div>
  );
}
