import facebookIcon from "../../../assets/images/facebook-icon.svg";
import twitterIcon from "../../../assets/images/twitter-icon.svg";
import emailIcon from "../../../assets/images/email-icon.svg";

export const SOCIAL_MEDIA_BUTTONS = [
  {
    content: "Share",
    icon: facebookIcon,
    action: () => console.log("hey"),
  },
  {
    content: "Tweet",
    icon: twitterIcon,
    action: () => console.log("hey"),
  },
  {
    content: "Send",
    icon: emailIcon,
    action: () => console.log("hey"),
  },
];
