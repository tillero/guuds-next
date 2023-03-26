import Settings from "@/public/icons/settings.svg";

export enum IconType {
  Settings = "settings",
}

const IconComponent = ({
  name,
  className,
}: {
  name: IconType;
  className: string;
}) => {
  switch (name) {
    case "settings":
      return <Settings className={className} />;
    default:
      return <></>;
  }
};

export default IconComponent;
