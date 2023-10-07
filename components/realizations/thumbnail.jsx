import Image from "next/image";
import Link from "next/link";
import Text from "../typography/text";
import React from "react";
import Slide from "react-reveal/Slide";

export default function Thumbnail(props) {
  const photo = props.realization.acf.teaser.teaser_photo;
  const href = props.realization.slug
    ? "/realizacja/" + props.realization.slug
    : "";

  return (
    <div className="realization-thumbnail lg:max-h-480 mb-12 md:mb-0 md:mr-12 lg:mb-14">
      <Slide bottom>
        <Link href={href}>
          <a>
            <div className="group flex flex-col items-center md:block cursor-pointer">
              <div className="block-important realization-picture w-320 h-320 md:w-405 md:h-405 group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive transform group-hover:translate-x-2.5 group-hover:-translate-y-2.5 md:w-320 md:h-320 xl:w-400 xl:h-400 art-transition">
                {photo && (
                  <Image
                    quality={100}
                    src={photo.url}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <Text size="h3" custom="mt-5 group-hover:mt-5 w-320 lg:w-400">
                {props.realization.title.rendered}
              </Text>
            </div>
          </a>
        </Link>
      </Slide>
    </div>
  );
}
