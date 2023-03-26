"use client";

import AutoComplete from "@/components/AutoComplete";
import Button from "@/components/Button";
import { Category } from "@/components/CategoryCheckbox";
import Checkbox from "@/components/Checkbox";
import Divider from "@/components/Divider";
import TextInput from "@/components/TextInput";
import { IconType } from "@/components/Icon";
import { useState } from "react";

const MapFilter = () => {
  const titlesClass = "font-bold text-black my-2";
  return (
    <div className="px-3">
      <TextInput
        name="term"
        label="Stichwortsuche"
        placeholder="Apfel, Bäckerei, Firma"
        className=""
      />
      <AutoComplete
        name="location"
        label="Wo suchst du?"
        placeholder="Ort, PLZ"
        className="my-7"
      />
      <Divider />
      <div className={titlesClass}>Einkaufsmöglichkeiten</div>
      <Checkbox label="online" name="online" />
      <Checkbox label="vor Ort" name="local" />
      <Divider />
      <div className={titlesClass}>Kategorien</div>
      <Checkbox label="Lebensmittel" name={Category.Lebensmittel} />
      <Checkbox label="Kleidung" name={Category.Kleidung} />
      <Checkbox label="Körperpflege" name={Category.Körperpflege} />
      <Checkbox label="Einrichtung" name={Category.Einrichtung} />
      <Checkbox label="Haushalt" name={Category.Haushalt} />
      <Checkbox label="Freizeit" name={Category.Freizeit} />
      <Divider />
      <div className={titlesClass}>Labels</div>
      <Checkbox label="Bio Suisse" name="bio-suisse" />
      <Checkbox label="Demeter" name="demeter" />
      <Checkbox label="Max Havelar" name="max-havelar" />
      <Divider />
      <div className={titlesClass}>Nachhaltigkeit</div>
      <Checkbox label="Vegetarisch" name="vegetarian" />
      <Checkbox label="Vegan" name="vegan" />
      <Checkbox label="Biologisch" name="bio" />
      <Checkbox label="Food Safe" name="food-safe" />
      <Checkbox label="Soziale Projekte" name="social-projects" />
      <Divider />
      <div className={titlesClass}>Unverträglichkeiten</div>
      <Checkbox label="keine Laktose" name="lactose-free" />
      <Checkbox label="keine Nüsse" name="nut-free" />
      <Checkbox label="Glutenfrei" name="gluten-free" />
    </div>
  );
};

const MapFilterContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        label="Filter öffnen"
        className="absolute m-5 z-10"
        secondary
        onClick={() => setOpen(true)}
        icon={IconType.Settings}
      />
      {open && (
        <div className="absolute h-[800px] w-full sm:w-1/4 min-w-[350px] bg-white pb-6 z-10 px-3 overflow-auto">
          <div className="flex justify-end">
            <Button
              label="Filter schliessen"
              className="m-3"
              minimal
              icon={IconType.Settings}
              onClick={() => setOpen(false)}
            />
          </div>
          <MapFilter />
        </div>
      )}
    </>
  );
};

export default MapFilterContainer;
