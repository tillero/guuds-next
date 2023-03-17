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

  const handleChange = (value: string) => {
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

  const Suggestions = () => {
    return (
      <div
        className={
          "absolute w-full bg-white p-px z-10 border-grey-light border rounded shadow-lg translate-y-2" +
          classHidden
        }
      >
        {options.map((el) => {
          return (
            <div
              className="text-black p-3 hover:bg-grey cursor-pointer rounded"
              key={el}
              onClick={() => optionClicked(el)}
            >
              {el}
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
        className="h-10 border-solid rounded-md border-grey bg-white border px-3 w-full text-black sans focus:outline focus:outline-blue-dark-2"
        name={name}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setVisible(true)}
        /*onBlur={() => setVisible(false)}*/
        placeholder={placeholder}
      ></input>
      <Suggestions />
    </div>
  );
};

export default AutoComplete;
