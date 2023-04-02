import Map from "./MapComponent";
import MapFilter from "./MapFilter";
import fs from "fs";
import { join } from "path";
import { useRouter } from "next/router";

const getStores = async () => {
  const storesDirectory = join(process.cwd(), "content/stores");
  const files = fs.readdirSync(storesDirectory);
  const filesFiltered = files.filter((file) => file.slice(-3) === ".md");
  return await Promise.all(
    filesFiltered.map(async (file) => {
      return await import("content/stores/" + file).then((content) => {
        return content.attributes;
      });
    })
  );
};

export default async function MapPage({
  searchParams,
}: {
  searchParams?: any;
}) {
  const stores = await getStores();
  let categoriesSelected: string[] = [];
  for (const key in searchParams) {
    if (searchParams[key] === "true") {
      categoriesSelected.push(key);
    }
  }
  const filteredStores = stores.filter((store) => {
    let selected = false;
    store.category.forEach((cat: string) => {
      if (categoriesSelected.includes(cat)) {
        selected = true;
      }
    });
    return selected;
  });

  return (
    <>
      <MapFilter categories={categoriesSelected} />
      <Map stores={filteredStores} />
    </>
  );
}
