import Hashtag from "../common/hashtag";
import Image from "next/image";
import Number from "../common/number";
import Link from "next/link";
import Text from "../typography/text";
import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import useWindowSize from "../../hooks/useWindowSize";

function getZIndex(index) {
  switch (index) {
    case 3:
      return 0;
    case 2:
      return 1;
    case 1:
      return 2;
    case 0:
      return 3;
  }
}

export default function FeaturedRealizations(props) {
  let directions = ["top-left", "top-right", "bottom-right", "bottom-left"];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const windowSize = useWindowSize();

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress }) => {
    setCurrentProgress(progress);
  };

  // clip-path: polygon(0 0, 100% 0, 100% 64%, 0 63%);

  return (
    <div className="lg:pb-96" style={{ paddingBottom: "90vh" }}>
      <div
        className="md:sticky md:top-1/3"
        style={{
          top:
            currentStepIndex === props.realizations.length - 1
              ? "0"
              : (windowSize.height - 690) / 2 + "px",
          paddingTop:
            currentStepIndex === props.realizations.length - 1
              ? (windowSize.height - 690) / 2 + "px"
              : "",
        }}
      >
        <Number direction={directions[currentStepIndex]}>
          <div
            className="lg:flex lg:w-full lg:h-full transition lg:duration-300 lg:ease-in-out"
            style={{
              transform: "translateX(-" + currentStepIndex * 100 + "%)",
            }}
          >
            {[1, 2, 3, 4].map((item, idx) => (
              <p
                key={idx}
                className="lg:absolute lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center"
                style={{
                  right: "-" + idx * 100 + "%",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </Number>
        {props.realizations.map((e, idx) => (
          <div key={idx} className="md:absolute md:right-0">
            <div
              style={{
                clipPath:
                  currentStepIndex === idx
                    ? currentStepIndex === props.realizations.length - 1
                      ? ""
                      : "polygon(0 0, 100% 0, 100% " +
                        (100 - currentProgress * 100) +
                        "%, 0 " +
                        (100 - currentProgress * 100) +
                        "%)"
                    : currentStepIndex > idx
                    ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
                    : "",
                // transform:
                //   currentStepIndex === idx
                //     ? "translateY(-20px)"
                //     : "translateY(-" + currentProgress * 20 + "px)",
                zIndex: getZIndex(idx),
              }}
              className="shadow-caseInsetActiveMobile lg:relative lg:first:translate-y-0 lg:shadow-none md:w-438 md:h-438 lg:w-690 lg:h-690 md:overflow-hidden md:flex md:flex-col"
            >
              <Link href={"/realizacja/" + e.post_name}>
                <a>
                  <Image
                    src={e.acf.teaser.teaser_photo.url}
                    alt={e.acf.teaser.teaser_photo.alt}
                    width={700}
                    height={700}
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Scrollama
        offset="0.1"
        onStepEnter={onStepEnter}
        onStepProgress={onStepProgress}
        progress={true}
      >
        {props.realizations.map((e, idx) => (
          <Step data={idx} key={idx}>
            <div
              style={{
                height: idx === props.realizations.length - 1 ? "5vh" : "",
                marginBottom: idx === props.realizations.length - 1 ? "0" : "",
              }}
              className="md:mb-36 md:max-w-365 md:h-screen lg:ml-150 lg:mt-150"
            >
              <div
                className="mt-9 md:mt-12 md:mr-10 lg:mt-0"
                style={{
                  paddingTop:
                    idx === props.realizations.length - 1 ? "200px" : "150px",
                }}
              >
                <Link href={"/realizacja/" + e.post_name}>
                  <a>
                    <Text size="h3" custom="mb-0.625 leading-7">
                      {e.acf.header_title}
                    </Text>
                  </a>
                </Link>
                <Text size="h2" custom="mb-8">
                  {e.acf.teaser.teaser_subtitle}
                </Text>
                <div className="ml-10 md:ml-16 mb-7.5r hashtags-home">
                  {e.acf.teaser.teaser_hashtags
                    .slice(0, 6)
                    .map((element, index) => (
                      <Hashtag key={index} custom="leading-6">
                        {element.teaser_hashtag}
                      </Hashtag>
                    ))}
                </div>
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
}
