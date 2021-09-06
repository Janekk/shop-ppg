import Image from "next/image";

import logo from "../../mocks/CoachInsiderLogo.png";

const MOCK_PURCHASE = {
  value: 250,
};

const MOCK_MERCHANT = {
  name: "Coach",
  location: "Coach Woodfield Mall",
};

const text = {
  __html: `With your purchase <b>${MOCK_MERCHANT.name} donates $10</b> to support the cause \n of your choice.`,
};

const text2 = {
  __html: `Thank you for your recent purchase of <b>${MOCK_PURCHASE.value}</b> at ${MOCK_MERCHANT.name} store located at \n <b>${MOCK_MERCHANT.location}</b>. This purchase is eligible for donations until Oct. 15, 2021.`,
};

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        src={logo}
        alt="Picture of the merchant"
        width={451}
        height={178}
      />
      <p
        dangerouslySetInnerHTML={text}
        className="text-lg text-center whitespace-pre-line leading-10"
      />
      <p
        dangerouslySetInnerHTML={text2}
        className="text-m text-center whitespace-pre-line leading-7"
      />
    </div>
  );
};

export default Header;
