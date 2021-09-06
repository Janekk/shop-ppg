import Button from "../Button";
import { SOCIAL_MEDIA_BUTTONS } from "./constants";

const SocialMedia = () => {
  const renderSocialMediaButtons = () =>
    SOCIAL_MEDIA_BUTTONS.map(({ icon, content }) => (
      <Button className="bg-black text-white px-4 py-2">
        <div className="flex gap-3">
          <img src={icon} alt="Social Media Icon" />
          {content}
        </div>
      </Button>
    ));

  return (
    <div className="flex flex-col items-center border-2 py-10 px-52 border-black gap-5">
      <h3 className="text-m font-bold">Every Donation Matters</h3>
      <p className="text-sm">
        Spread the word to your community to create even more positive impact!
      </p>
      <div className="flex gap-5">{renderSocialMediaButtons()}</div>
    </div>
  );
};

export default SocialMedia;
