import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";

export default function SubpageHero({ data }) {
  const windowSize = useWindowSize();
  let wrapperClasses = classNames({
    "bg-green z-10 pb-16 xl:ml-7.5r lg:mb-400": true,
    "lg:mb-400": data.photo,
    "lg:mb-s-mar": !data.photo,
  });
  return (
    <div className={wrapperClasses}>
      <div className="container mx-auto px-4 md:px-8 md:pt-7.5r md:pb-16 md:flex md:items-center lg:grid lg:grid-cols-12">
        <div className="pt-300 -mt-200 md:pt-0 md:mt-0 md:mr-16 lg:col-span-5">
          <Text size="body-18" custom="mb-8 md:text-1.5 md:leading-8 md:mb-16">
            {data.b_desc}
          </Text>
          <Text size="body-16" custom="md:text-1.125 md:leading-8">
            {data.desc}
          </Text>
        </div>
        <div className="hidden md:block" />
        {windowSize.width < 1280 && (
          <div className="hidden md:block block-important shadow-dark-wide md:min-w-1/4">
            {data.photo && (
              <Image
                quality={100}
                src={data.photo.sizes["medium"]}
                width={data.photo.sizes["medium-width"]}
                height={data.photo.sizes["medium-height"]}
                alt={data.photo.alt}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
