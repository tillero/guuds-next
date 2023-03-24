"use client";

import { useState } from "react";

const locations = ["Bern", "Berlin", "Zürich"];

const AutoComplete = ({
  name,
  label,
  placeholder,
  className,
}: {
  name: string;
  label: string;
  placeholder: string;
  className: string;
}) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(locations);
  const [active, setActive] = useState(-1);

  const handleChange = (value: string) => {
    setActive(-1);
    filterLocations(value);
    if (options.length < 1 && visible) {
      setVisible(false);
    } else if (options.length > 0 && !visible) {
      setVisible(true);
    }
    setText(value);
  };

  const filterLocations = (value: string) => {
    setOptions(locations.filter((location) => location.includes(value)));
  };

  const classHidden = visible ? "" : " hidden";

  const optionClicked = (option: string) => {
    setText(option);
    setVisible(false);
  };

  const onFocusLost = () => {
    setActive(-1);
    setVisible(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0) optionClicked(options[active]);
      else onFocusLost();
    } else if (e.key === "ArrowUp") {
      if (active > -1) setActive(active - 1);
    } else if (e.key === "ArrowDown") {
      if (active + 1 < options.length) setActive(active + 1);
    }
  };

  const Suggestions = () => {
    return (
      <div
        className={
          "absolute w-full bg-white p-px z-10 border-grey-light border rounded shadow-lg translate-y-2" +
          classHidden
        }
      >
        {options.map((el, i) => {
          const selected = active === i ? " bg-grey" : "";
          return (
            <div
              className={
                "text-grey-dark p-3 hover:bg-grey cursor-pointer rounded" +
                selected
              }
              key={i}
              onClick={() => optionClicked(el)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {text
                ? el.split(text).map((textPart, i) => {
                    return i === 0 ? (
                      <span>
                        <b className="font-bold text-black">{textPart}</b>
                        {text}
                      </span>
                    ) : (
                      <span>
                        <b className="font-bold text-black">{textPart}</b>
                      </span>
                    );
                  })
                : el}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={"relative " + className}>
      <label className="text-black">{label}</label>
      <input
        type="text"
        autoComplete="off"
        className="h-10 border-solid rounded-md border-grey bg-white border px-3 w-full text-black sans focus:outline focus:outline-blue-dark-2"
        name={name}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setVisible(true)}
        onBlur={() => onFocusLost()}
        placeholder={placeholder}
        onKeyDown={(e) => onKeyDown(e)}
      ></input>
      <Suggestions />
    </div>
  );
};

export default AutoComplete;
