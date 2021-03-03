import Text from "../typography/text";
import Image from "next/image";
import SubpagesLottie from "../lottie/subpagesLottie";
import {useEffect, useRef, useState} from "react";

export default function Activity({ activity }) {
  const wrapper = useRef(null);
  const [customHeight, setCustomHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setCustomHeight(wrapper.current.offsetWidth)
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      id={activity.activity_animation}
      className="activity pt-40 md:mt-s-mar lg:mt-s-mar lg:pt-28 md:w-45p flex flex-col-reverse justify-end lg:justify-start lg:w-full lg:flex-row"
    >
      <div className="lg:max-w-40 lg:mr-200">
        <div className="my-12">
          <Text size="h2" custom="mb-8">
            {activity.activity_title}
          </Text>
          <Text size="body-16" custom="lg:text-1.125 lg:leading-8">
            {activity.activity_description}
          </Text>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:ml-20p xl:mt-24">
          {activity.activity_services.map((item, index) => (
            <div key={index} className="mb-7 lg:mb-0">
              <Text size="body-bold-18" custom="mb-4">
                {item.service_name}
              </Text>
              <Text size="body-16">{item.service_desc}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className="relative lg:w-full lg:transform lg:-translate-x-115 lg:mt-28">
        <div className="absolute top-0 right-0 transform -translate-y-full lg:translate-x-full h-xs5 w-xs5 lg:w-x2 lg:h-x2">
          <SubpagesLottie
            lottie={activity.activity_animation}
            custom="h-full w-full p-4 lg:p-6"
            innerCustom="w-full h-full"
          />
        </div>
        <div className="block-important hover:shadow-caseInsetActiveMobile md:hover:shadow-caseInsetActive art-transition relative w-full ratio-square" style={{ height: customHeight + 'px'}} ref={wrapper}>
          { activity.activity_image &&
            <Image
              quality={100}
              src={activity.activity_image.sizes["post-thumbnail"]}
              layout="fill"
              objectFit="cover"
              alt={activity.activity_image.alt}
            />
          }
        </div>
      </div>
    </div>
  );
}
