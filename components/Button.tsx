import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "./Icon";

interface ButtonProps {
  label: string;
  className?: string;
  value?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  formAction?: string;
  primary?: boolean;
  secondary?: boolean;
  minimal?: boolean;
  icon?: IconType;
}

const defaultClass =
  "rounded-md sans text-sm ss:text-base font-semibold px-1 ss:px-3 py-1.5";
const primaryClass =
  "text-white bg-yellow hover:bg-yellow-light border-yellow border hover:border-yellow-light fill-white";
const secondaryClass =
  "text-blue border border-blue bg-white hover:text-white hover:bg-blue fill-blue hover:fill-white";
const minimalClass =
  "text-blue hover:text-blue-dark fill-blue hover:fill-blue-dark";
const iconClass = "flex justify-between align-center";

const Button = ({
  label,
  className,
  value,
  type,
  onClick,
  formAction,
  primary,
  secondary,
  minimal,
  icon,
}: ButtonProps) => {
  let ButtonClasses = defaultClass;
  if (secondary) {
    ButtonClasses += " " + secondaryClass;
  } else if (minimal) {
    ButtonClasses += " " + minimalClass;
  } else {
    ButtonClasses += " " + primaryClass;
  }
  if (icon) {
    ButtonClasses += " " + iconClass;
  }
  if (className) ButtonClasses = twMerge(ButtonClasses, className);
  return (
    <button
      className={ButtonClasses}
      value={value}
      type={type ? type : "button"}
      formAction={formAction}
      onClick={onClick}
    >
      <div className="whitespace-nowrap">{label}</div>
      {icon && (
        <Icon
          name={icon}
          className={"h-full w-5 ml-1 ss:ml-3 fill-[inherit] self-center"}
        ></Icon>
      )}
    </button>
  );
};

export default Button;
