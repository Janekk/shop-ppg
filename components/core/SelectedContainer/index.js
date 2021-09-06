import Image from "next/image";
import selectedIcon from "../../../assets/images/selected-icon.svg";

const SelectedContainer = ({ children, isSelected }) => {
  return (
    <div className="relative">
      <>
        {isSelected && (
          <div className="absolute top-0 right-0 p-3">
            <Image src={selectedIcon} width={50} height={50} />
          </div>
        )}
        {children}
      </>
    </div>
  );
};

export default SelectedContainer;
