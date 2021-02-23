import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";

export default function SubpageHero({ data, isImage }) {
  const windowSize = useWindowSize();
  let wrapperClasses = classNames({
    "bg-green z-10 pb-16 md:min-h-70 lg:ml-7.5r": true,
    "lg:mb-400": data.photo,
    "lg:mb-s-mar": !data.photo,
  });

  let textWrapperClasses = classNames({
    "md:mt-0 md:col-span-4": true,
    "pt-300 -mt-200 md:pt-24 lg:pt-400": isImage,
    "pt-300 -mt-200 md:pt-0": !isImage,
  })

  return (
    <div className={wrapperClasses}>
      <div className="mx-7 md:mx-16 lg:mx-7.5r md:pt-7.5r md:pb-16 md:h-full md:grid md:grid-cols-12">
        {isImage && <div className="hidden md:block md:col-span-7 2k:hidden">

        </div>}
        <div className={textWrapperClasses}>
          <Text size="body-18" custom="mb-8 md:text-1.5 md:leading-8 md:mb-16">
            {data.b_desc}
          </Text>
          <Text size="body-16" custom="md:text-1.125 md:leading-8">
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
