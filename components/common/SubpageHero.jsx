import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { useRef, useEffect, useState } from "react";
import classNames from "classnames";

export default function SubpageHero({ data, isImage }) {
  const windowSize = useWindowSize();
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

  const textClasses = classNames({
    "mb-8 md:w-1/2 lg:w-full lg:col-span-5": true,
})

  return (
    <header className="hero-section-header mt-16 md:flex md:items-end lg:grid lg:grid-cols-12">
      <div className={textClasses}>
        <p className="max-w-90 tracking-widest md:text-0.5 font-bold uppercase mb-8 font-aller">
          {data.subtitle}
        </p>
        <Text size="p" custom="text-2.25 lg:text-2.875 leading-3r font-light lg:leading-4r font-aller">{data.title}</Text>
      </div>
      <div className="md:h-full ratio-square-md md:absolute md:right-0 md:bottom-0 lg:top-0 lg:max-w-700 md:transform md:translate-y-44 lg:translate-y-0 md:w-1/2" ref={wrapper} style={{ height: customHeight + 'px'}}>
        <div className="h-320 w-full lg:col-span-5 z-10 relative" style={{ height: customHeight + 'px'}}>
          <Image
            quality={100}
            src={data.photo.sizes["post-thumbnail"]}
            layout="fill"
            objectFit="cover"
            alt={data.photo.alt}
          />
        </div>
        {data.lesser_photo && windowSize.width >= 768 && (
          <div className="relative h-x7 w-x7 md:transform md:-translate-x-full">
            <Image
              quality={100}
              src={data.lesser_photo.sizes["medium"]}
              layout="fill"
              objectFit="cover"
              alt={data.lesser_photo.alt}
            />
          </div>
        )}
      </div>
    </header>
  );
}
