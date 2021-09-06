import Image from "next/image";

const CauseCard = ({ data }) => {
  const { imageSrc, name, location } = data;

  return (
    <div className="flex flex-col items-center justify-end gap-4 pb-5 h-full">
      <div className="h-32 w-52 relative">
        {imageSrc && (
          <Image
            className="smooth"
            src={imageSrc}
            alt="Picture of the merchant"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
      <h4 className="flex items-end justify-center text-m font-bold text-center w-365px">
        {name}
      </h4>
      <p className="text-xs font-bold">{location}</p>
    </div>
  );
};

export default CauseCard;
