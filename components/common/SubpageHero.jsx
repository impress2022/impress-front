import Text from "../typography/text";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";

export default function SubpageHero({ data }) {
  const windowSize = useWindowSize();
  return (
    <header className="hero-section-header mt-7.5r md:flex md:items-center lg:grid lg:grid-cols-12">
      <div className="mb-8 lg:mb-36 md:col-span-7 lg:col-span-5 md:mr-12">
        <p className="max-w-90 tracking-widest md:text-0.5 font-bold uppercase mb-8 font-aller">
          {data.subtitle}
        </p>
        <Text size="h2">{data.title}</Text>
      </div>
      <div className="lg:absolute lg:right-0 h-320 md:min-h-40 lg:h-l-320">
        <div className="block-important shadow-dark md:shadow-dark-wide lg:col-span-5 xl:col-span-7 z-10 relative h-full md:min-w-1/3 lg:min-w-42">
          <Image
            quality={100}
            src={data.photo.sizes["post-thumbnail"]}
            layout="fill"
            objectFit="cover"
            alt={data.photo.alt}
          />
        </div>
        {data.lesser_photo && windowSize.width >= 1280 && (
          <div className="relative lg:w-3/8 lg:h-320 lg:float-right lg:mt-16 block-important shadow-dark md:shadow-dark-wide">
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
