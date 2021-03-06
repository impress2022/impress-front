import Hashtag from "../common/hashtag";
import Image from "next/image";
import Number from "../common/number";
import Link from "next/link";
import Text from "../typography/text";
import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Scrollama, Step } from 'react-scrollama';

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

  const wrapper = useRef(null);
  const [customHeight, setCustomHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
          if (wrapper.current.offsetWidth) {
              setCustomHeight(wrapper.current.offsetWidth)
          }
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress }) => {
    setCurrentProgress(progress);
  };

  const images = props.realizations.map((e, idx) => {
    return (
      <div key={idx} className='md:absolute md:right-0'>
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
            zIndex: getZIndex(idx),
          }}
          className="lg:relative lg:first:translate-y-0 w-full h-full md:overflow-hidden md:flex md:flex-col"
        >
          <Link href={"/realizacja/" + e.post_name}>
            <a>
              {e.acf.teaser.teaser_photo &&
                <Image
                  src={e.acf.teaser.teaser_photo.url}
                  alt={e.acf.teaser.teaser_photo.alt}
                  width={700}
                  height={700}
                  className={"transition-home-image transition-home-image-" + idx}
                />
              }
            </a>
          </Link>
          <style jsx global>{`
          .transition-home-image {
            transform: translateY(0);
          }

          .transition-home-image-0 {
            ${currentStepIndex === 0
            ? "transform: translateY(-" +
            currentProgress * 20 +
            "px) !important"
            : "transform: translateY(0px)"};
          }

          .transition-home-image-1 {
            ${currentStepIndex === 0
            ? "transform: translateY(" +
            (1 - currentProgress) * 20 +
            "px) !important"
            : currentStepIndex === 1
              ? "transform: translateY(-" +
              currentProgress * 20 +
              "px) !important"
              : ""};
          }

          .transition-home-image-2 {
            ${currentStepIndex === 1
            ? "transform: translateY(" +
            (1 - currentProgress) * 20 +
            "px) !important"
            : currentStepIndex === 2
              ? "transform: translateY(-" +
              currentProgress * 20 +
              "px) !important"
              : ""};
          }

          .transition-home-image-3 {
            ${currentStepIndex === 2
            ? "transform: translateY(" +
            (1 - currentProgress) * 20 +
            "px) !important"
            : ""};
          }
        `}</style>
        </div>
      </div>
    )
  });

  // clip-path: polygon(0 0, 100% 0, 100% 64%, 0 63%);

  return (
    <div className="lg:pb-96" style={{ paddingBottom: "90vh" }}>
      <div
        className="md:sticky md:top-1/3"
        style={{
          top:
            currentStepIndex === props.realizations.length - 1
              ? "0"
              : (windowSize.height - customHeight) / 2 + "px",
          paddingTop:
            currentStepIndex === props.realizations.length - 1
              ? (windowSize.height - customHeight) / 2 + "px"
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
        <div ref={wrapper} style={{ width: '40%', height: customHeight + 'px', overflow: 'hidden' }} className="md:absolute md:right-0 lg:shadow-caseInset art-transition lg:hover:shadow-caseInsetActive">
          {images}
        </div>
      </div>
      <Scrollama
        offset="0.4"
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
                className="ml-8"
                style={{
                  paddingTop:
                    idx === props.realizations.length - 1 ? "100px" : "50px",
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
