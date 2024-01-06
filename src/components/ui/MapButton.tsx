import { FunctionComponent, ReactNode } from "react";

interface MapButtonProps {
  icon: ReactNode;
  className: string;
  onClick: () => void;
}

const MapButton: FunctionComponent<MapButtonProps> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};

export default MapButton;
