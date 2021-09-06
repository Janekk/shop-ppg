import { useContext } from "react";
import Image from "next/image";

import { store } from "../../../../context/store";
import SelectedContainer from "../../../core/SelectedContainer";
import Button from "../../../core/Button";

const CauseCard = ({ data }) => {
  const { state: donation, actions } = useContext(store);
  const { id, imageSrc, name, location, description } = data;

  const handleClick = () => actions.selectCause(data);

  const isSelected = donation.selected.id === id;

  return (
    <SelectedContainer isSelected={isSelected}>
      <div className="flex flex-col items-center justify-end border-2 border-black w-365px min-h-530px px-4 gap-4 pb-8">
        <div className="flex flex-col items-center justify-end gap-4 h-full">
          <div className="h-32 w-52 relative">
            <Image
              className="smooth"
              src={imageSrc}
              alt="Picture of the merchant"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h4 className="flex items-end text-m font-bold text-center min-h-56px">
            {name}
          </h4>
          <p className="text-xs font-bold">{location}</p>
          <p className="text-sm text-center min-h-140px">{description}</p>
          <Button
            onClick={handleClick}
            isSelected={isSelected}
            value={id}
            className="px-20 py-2"
          >
            Select
          </Button>
        </div>
      </div>
    </SelectedContainer>
  );
};

export default CauseCard;
