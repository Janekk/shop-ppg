import { useContext } from "react";
import Image from "next/image";

import mockLogo from "../../../mocks/CoachInsiderLogo.png";
import { store } from "../../../context/store";
import CauseCard from "../../../components/core/CauseCard";
import Button from "../../../components/core/Button";
import Footer from "../../../components/core/Footer";
import SocialMedia from "../../../components/core/SocialMedia";

const text = {
  __html: `<b>Coach will donate $10</b> to support your selected cause.`,
};

const text2 = {
  __html: `This donation was made possible by your purchase of <b>$250</> made on <b>July 24th, 2020</b> at Coach located at \n
  <b>Coach Woodfield Mall</b>`,
};

function ThankYouPage() {
  const { state: donation } = useContext(store);

  return (
    <div className="flex flex-col items-center w-full h-full gap-14 pt-40">
      <div className="h-20 w-52 relative">
        <Image
          src={mockLogo || "oi"}
          alt="Picture of the merchant"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-xg font-extrabold">THANK YOU</div>
      <div className="flex flex-col gap-4 pb-5">
        <h3
          dangerouslySetInnerHTML={text}
          className="text-lg text-center leading-10"
        />
        <p className="text-m text-center leading-9">Your Selected Cause</p>
        <CauseCard data={donation.selected} />
      </div>
      <div className="flex flex-col gap-5">
        <p
          dangerouslySetInnerHTML={text2}
          className="text-sm text-center leading-3 whitespace-pre-line"
        />
        <p className="text-sm text-center leading-5 w-900px">
          Coach is commited to creating an impact for the communitites we serve
          and supporting the causes most important to our Insider members.
          Select a cause of your choice below from featured causes or search.
        </p>
      </div>
      <Button className="px-10 py-2">Track this Donation</Button>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default ThankYouPage;
