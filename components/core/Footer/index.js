import { useState } from "react";
import truncate from "lodash/truncate";
import Image from "next/image";

import plusIcon from "../../../assets/images/plus-icon.svg";
import minusIcon from "../../../assets/images/minus-icon.svg";

const MOCK_INFO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros mauris, blandit non ornare quis, fringilla ut leo. Aliquam nec ligula justo. Sed quis nulla tempor, semper mauris vitae, gravida erat. Nam vel dictum ligula, at euismod arcu. Nullam sollicitudin purus nibh, sit amet mollis turpis suscipit non. Cras eu nisi porttitor, aliquam libero sit amet, porta libero. Curabitur porta maximus lacinia. In consequat pulvinar risus, ac dapibus est. Duis fermentum ligula ac lorem condimentum, a congue nisi blandit. Maecenas quis lobortis eros. Nulla aliquam nulla et turpis imperdiet convallis. Pellentesque pellentesque augue diam, vulputate blandit ligula cursus quis. In fermentum tristique lectus, ut lobortis nisi rhoncus in. Etiam hendrerit porta risus, vel lobortis justo. Maecenas et neque volutpat, ultricies magna nec, interdum tellus. Etiam interdum tellus nec est laoreet placerat. Morbi mattis ligula justo, ac ultrices odio viverra ac. Nam non odio ac leo vehicula tincidunt. Pellentesque facilisis purus ante, eget maximus ipsum lacinia in. Quisque ultrices, erat ut ultricies accumsan, massa ante accumsan nibh, id cursus lectus eros non sapien. Aliquam accumsan vehicula massa sit amet iaculis. Nulla sagittis ullamcorper risus, ac porta velit vehicula vel. In vestibulum, turpis eu ullamcorper luctus, quam risus accumsan leo, vel feugiat nisl est in tellus. Quisque et tempor nibh, et rutrum ex. In ac lobortis libero. Sed iaculis, lectus id mollis fringilla, diam libero eleifend dolor, non vestibulum ex orci a eros. Donec tincidunt convallis nulla, in dignissim tortor blandit non. Nunc feugiat posuere magna vitae aliquam. Integer tincidunt laoreet efficitur. Praesent ac semper orci. Sed ac tellus gravida magna consectetur mollis ac in magna. Curabitur ultrices tempus tortor ut suscipit. Donec luctus, dolor vitae fringilla lacinia, magna lectus commodo risus, at ullamcorper enim lectus quis dui. Mauris ut ultricies leo. Pellentesque ipsum diam, ullamcorper nec ex et, pharetra semper lacus. Mauris rhoncus pellentesque ullamcorper. Donec dapibus velit vel lectus rutrum, eget varius erat porta. Mauris sit amet molestie ligula. Phasellus sagittis tincidunt est et hendrerit. Suspendisse tincidunt, justo eget tristique consequat, mauris ligula condimentum leo, nec feugiat lacus lacus non velit. Maecenas eget elit non lorem luctus fringilla sed eget metus. Pellentesque cursus quis nisl a sagittis. Sed sed ligula scelerisque, hendrerit turpis at, efficitur ligula. Sed sit amet leo quis ante aliquam ullamcorper ut in nisl. Fusce nibh justo, euismod id fermentum sit amet, facilisis a risus. Quisque pharetra a justo sit amet dignissim. Etiam in sem nec orci pellentesque tristique in vel diam. Aliquam a pretium nisi, vel lacinia ipsum. Suspendisse lacus mauris, posuere eu lectus eget, fringilla elementum tortor. Etiam semper quis leo ac congue. Suspendisse aliquet accumsan dapibus. Donec commodo sapien nulla, a gravida lectus laoreet et. Proin eu augue ut neque venenatis aliquam. Quisque lobortis id sem pretium aliquet. Aliquam erat volutpat. Integer et vestibulum justo. Quisque tellus justo, vulputate non nunc vitae, ultrices mollis dolor. Quisque ultrices, erat ut ultricies accumsan, massa ante accumsan nibh, id cursus lectus eros non sapien. Aliquam accumsan vehicula massa sit amet iaculis. Nulla sagittis ullamcorper risus, ac porta velit vehicula vel. In vestibulum, turpis eu ullamcorper luctus, quam risus accumsan leo, vel feugiat nisl est in tellus. Quisque et tempor nibh, et rutrum ex. In ac lobortis libero. Sed iaculis, lectus id mollis fringilla, diam libero eleifend dolor, non vestibulum ex orci a eros. Donec tincidunt convallis nulla, in dignissim tortor blandit non. Nunc feugiat posuere magna vitae aliquam. Integer tincidunt laoreet efficitur. Praesent ac semper orci. Sed ac tellus gravida magna consectetur mollis ac in magna. Quisque ultrices, erat ut ultricies accumsan, massa ante accumsan nibh, id cursus lectus eros non sapien. Aliquam accumsan vehicula massa sit amet iaculis. Nulla sagittis ullamcorper risus, ac porta velit vehicula vel. In vestibulum, turpis eu ullamcorper luctus, quam risus accumsan leo, vel feugiat nisl est in tellus. Quisque et tempor nibh, et rutrum ex. In ac lobortis libero. Sed iaculis, lectus id mollis fringilla, diam libero eleifend dolor, non vestibulum ex orci a eros. Donec tincidunt convallis nulla, in dignissim tortor blandit non. Nunc feugiat posuere magna vitae aliquam. Integer tincidunt laoreet efficitur. Praesent ac semper orci. Sed ac tellus gravida magna consectetur mollis ac in magna.";

const Footer = () => {
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false);

  const handleToggleDescription = () =>
    setDisplayMoreInfo((prevState) => !prevState);

  const info = displayMoreInfo
    ? MOCK_INFO
    : truncate(MOCK_INFO, { length: 650 });

  const buttonIcon = displayMoreInfo ? minusIcon : plusIcon;
  const buttonText = displayMoreInfo ? "Less" : "More";

  return (
    <div className="flex flex-col items-start w-full gap-2 bg-gray-20 py-16 px-20">
      <h3 className="text-sm font-bold">Terms & Conditions</h3>
      <div className="text-sm pt-2">{info}</div>
      <button onClick={handleToggleDescription} type="button">
        <div className="flex gap-2">
          <Image src={buttonIcon} width={12} height={12} />
          <span className="text-xs underline">{buttonText}</span>
        </div>
      </button>
    </div>
  );
};

export default Footer;
