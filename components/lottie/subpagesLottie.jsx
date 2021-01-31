import * as iconDesign from "./icon_design.json";
import * as iconMarketing from "./icon_marketing.json";
import * as iconPr from "./icon_pr.json";
import * as iconSocial from "./icon_social.json";
import classNames from "classnames";
import Lottie from "react-lottie";

export default function SubpagesLottie({ lottie, custom }) {
  const lotties = {
    design: iconDesign.default,
    marketing: iconMarketing.default,
    pr: iconPr.default,
    social: iconSocial.default,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotties[lottie],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let lottieClasses = classNames({
    // "w-l-118 h-l-118 md:w-l-160 md:h-l-160 lg:w-l-255 lg:h-l-255 my-14 pointer-events-none": true,
    "bg-grey-hover": lottie === "design",
    "bg-red": lottie === "marketing",
    "bg-dark-green": lottie === "pr",
    "bg-blue": lottie === "social",
  });

  if (custom) {
    lottieClasses += " " + custom;
  }

  return (
    <div className={lottieClasses}>
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </div>
  );
}
