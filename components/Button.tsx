import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  className?: string;
  value?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  formAction?: string;
  primary?: boolean;
  secondary?: boolean;
}

const defaultClass =
  "rounded-md sans text-sm ss:text-base font-semibold ss:px-3 py-1.5";
const primaryClass =
  "text-white bg-yellow hover:bg-yellow-light border-yellow border hover:border-yellow-light";
const secondaryClass =
  "text-blue border border-blue bg-white hover:text-white hover:bg-blue";

const Button = ({
  label,
  className,
  value,
  type,
  onClick,
  formAction,
  primary,
  secondary,
}: ButtonProps) => {
  let classes = secondary
    ? defaultClass + " " + secondaryClass
    : defaultClass + " " + primaryClass;
  if (className) classes = twMerge(classes, className);
  return (
    <button
      className={classes}
      value={value}
      type={type ? type : "button"}
      formAction={formAction}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
