const TextInput = ({
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
  return (
    <div className={className}>
      <label className="text-black">{label}</label>
      <input
        type="text"
        className="h-10 border-solid rounded-md border-grey bg-white border px-3 w-full text-black sans focus:outline focus:outline-blue-dark-2"
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default TextInput;
