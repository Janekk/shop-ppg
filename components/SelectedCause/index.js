import { useContext, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import Image from "next/image";

import shopgLogo from "../../assets/images/shopg-logo.svg";
import shopgText from "../../assets/images/shopg-text.svg";
import { store } from "../../context/store";
import CauseCard from "../core/CauseCard";
import Button from "../core/Button";
import LoadingState from "../core/LoadingState";

const MOCK_MERCHANT = {
  name: "Coach",
};

const text = {
  __html: `<b>${MOCK_MERCHANT.name} will donate $10</b> to support your selected cause.`,
};

const SelectedCause = () => {
  const router = useRouter();
  const { state: donation, actions } = useContext(store);
  const handleClick = () => actions.confirmCause();

  const hasDonationSelected = !isEmpty(donation.selected);
  const selectText = hasDonationSelected
    ? "Your Selected Cause"
    : "Select a cause above";

  const buttonContent =
    donation.isFetching || donation.shouldRedirect ? (
      <LoadingState className="w-152px h-6" />
    ) : (
      "Confirm Donation"
    );

  useEffect(() => {
    if (donation.shouldRedirect) {
      const merchantPath = router.asPath;

      router.push(`${merchantPath}/thank-you`);
    }
  }, [donation.shouldRedirect]);

  return (
    <div className="flex flex-col items-center gap-5 py-14">
      <h3
        dangerouslySetInnerHTML={text}
        className="text-lg text-center leading-10"
      />
      <p className="text-m text-center leading-9">{selectText}</p>
      {hasDonationSelected && <CauseCard data={donation.selected} />}
      <Button
        onClick={handleClick}
        disabled={!hasDonationSelected}
        className="px-12 py-2 text-white bg-black"
      >
        {buttonContent}
      </Button>
      <div className="flex items-center gap-1">
        <span className="font-bold text-3xs">Powered By</span>
        {/* ask for a shopg svg logo */}
        <Image src={shopgLogo} width={13} height={17} />
        <Image src={shopgText} width={91} height={13} />
      </div>
    </div>
  );
};

export default SelectedCause;
