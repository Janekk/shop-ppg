import { useContext, useState } from "react";
import Image from "next/image";

import { store } from "../../../../context/store";
import Button from "../../../core/Button";

const CauseCard = ({ data }) => {
  const { state: donation, actions } = useContext(store);
  const [displayDescription, setDisplayDescription] = useState(false);
  const { id, imageSrc, name, location, description } = data;

  const handleClick = () => actions.selectCause(data);

  const handleToggleDescription = () =>
    setDisplayDescription((prevState) => !prevState);

  const isSelected = donation.selected.id === id;

  return (
    <div className="flex items-start justify-end border-2 border-t-0 border-black p-5 gap-4">
      <div className="h-14 w-28 relative">
        <Image
          className="smooth"
          src={imageSrc}
          alt="Picture of the merchant"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-start justify-start gap-5 w-full h-full">
          <div className="flex flex-col w-full">
            <h4 className="flex items-end text-sm font-bold text-center">
              {name}
            </h4>
            <p className="text-2xs">{location}</p>
          </div>
          <Button
            onClick={handleClick}
            isSelected={isSelected}
            value={id}
            className="px-8 py-2 smooth"
          >
            Select
          </Button>
        </div>
        <div className="flex flex-col items-start text-2xs w-full gap-2 smooth">
          {displayDescription && (
            <p className="leading-4 pt-2">{description}</p>
          )}
          <button
            onClick={handleToggleDescription}
            type="button"
            className="text-gray-40"
          >
            {displayDescription ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CauseCard;
