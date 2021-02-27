import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";

export default function SubpageHeroDesc({ data, isImage, color }) {
  const windowSize = useWindowSize();
  let wrapperClasses = classNames({
    "z-10 pb-16 lg:ml-7.5r": true,
    "lg:mb-200 md:min-h-70": data.photo,
  });

  wrapperClasses += color === "blue" ? " bg-blue" : " bg-green";

  let textWrapperClasses = classNames({
    "md:mt-0 md:col-span-4": true,
    "pt-250 -mt-200 md:pt-24": isImage,
    "pt-250 -mt-200 md:pt-0": !isImage,
  })

  let wrClasses = classNames({
    "mx-7 md:mx-16 md:pt-7.5r md:pb-16 md:h-full md:grid md:grid-cols-12": true,
    "lg:mx-7.5r": isImage,
    "lg:mx-12": !isImage,
  })

  return (
    <div className={wrapperClasses}>
      <div className={wrClasses}>
        {isImage && <div className="hidden md:block md:col-span-7 2k:hidden">

        </div>}
        <div className={textWrapperClasses} style={{
          paddingTop: windowSize.width >= 1280 && windowSize.width < 1450 && isImage ? (windowSize.width/10 + 100) + "px" :
            windowSize.width >= 1450 ? (windowSize.width/5) + "px" : "",
        }}>
          <Text size="body-18" custom="mb-8 md:text-1.5 md:leading-8 md:mb-16" color={color === "blue" ? "white" : "black"}>
            {data.b_desc}
          </Text>
          <Text size="body-16" custom="md:text-1.125 md:leading-8" color={color === "blue" ? "white" : "black"}>
            {data.desc}
          </Text>
        </div>
        {isImage && <div className="hidden lg:block">

        </div>}
        <div className="hidden md:block" />
        {windowSize.width < 768 && (
          <div className="relative hidden md:block block-important w-full md:h-320 md:min-w-1/4">
            {data.photo && (
              <Image
                quality={100}
                src={data.photo.sizes["medium"]}
                layout="fill"
                objectFit="cover"
                alt={data.photo.alt}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
