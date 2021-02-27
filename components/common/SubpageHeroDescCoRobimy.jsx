import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";

export default function SubpageHeroDescCoRobimy({ data, color }) {
  const windowSize = useWindowSize();
  let wrapperClasses = classNames({
    "lg:ml-7.5r z-10 pb-16": true,
    "lg:mb-400": data.photo,
  });

  wrapperClasses += color === "blue" ? " bg-blue" : " bg-green";

  return (
    <div className={wrapperClasses}>
      <div className="mx-7 lg:mx-0 lg:pl-16 md:pt-7.5r md:pb-16 md:flex md:items-center lg:grid lg:grid-cols-12">
        <div className="pt-300 -mt-200 md:pt-0 md:mt-0 md:mr-16 lg:col-span-5">
          <Text size="body-18" custom="mb-8 md:text-1.5 md:leading-8 md:mb-16" color="white">
            {data.b_desc}
          </Text>
          <Text size="body-16" custom="md:text-1.125 md:leading-8" color="white">
            {data.desc}
          </Text>
        </div>
        <div className="hidden md:block" />
        {windowSize.width < 1280 && (
          <div className="relative hidden md:block block-important shadow-dark-wide w-full md:h-320 md:min-w-1/4">
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
