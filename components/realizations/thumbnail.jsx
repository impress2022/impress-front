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
    <div className="realization-thumbnail lg:max-h-480 mb-12 md:mb-0 lg:mb-14">
      <Slide bottom>
        <Link href={href}>
          <a>
            <div className="group md:flex md:flex-col lg:block cursor-pointer">
              <div className="shadow-caseInsetMobile block-important lg:shadow-caseInset group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive transform group-hover:translate-x-2.5 group-hover:-translate-y-2.5 md:w-320 md:h-320 xl:w-400 xl:h-400 transition duration-200 ease-linear">
                <Image
                  quality={100}
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                />
              </div>
              <Text size="h3" custom="mt-5 group-hover:mt-5">
                {props.realization.title.rendered}
              </Text>
            </div>
          </a>
        </Link>
      </Slide>
    </div>
  );
}
