import Image from "next/image";
import Hashtag from "../common/hashtag";
import Text from "../typography/text";
import Link from "next/link";
import React from "react";

export default function HomeTeaserMobile(props) {
  const el = props.element.acf;

  let hashtags = [];

  let c = 0;
  for (const element of el.teaser.teaser_hashtags.slice(0, 6)) {
    hashtags.push(
      <Hashtag key={c} custom="leading-6">
        {element.teaser_hashtag}
      </Hashtag>
    );
    c++;
  }

  return (
    <div className="md:flex md:flex-row-reverse md:mb-36">
      <div>
        <div className="shadow-caseInsetActiveMobile lg:shadow-none w-320 h-320 md:w-438 md:h-438 lg:w-690 lg:h-690">
          <Link href={"/realizacja/" + el.post_name}>
            <a>
              <Image
                src={el.teaser.teaser_photo.url}
                width={700}
                height={700}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-9 md:mt-12 md:mr-10 lg:mt-0">
        <Link href={"/realizacja/" + props.element.post_name}>
          <a>
            <Text size="h3" custom="mb-0.625 leading-7">
              {el.header_title}
            </Text>
          </a>
        </Link>
        <Text size="h2" custom="mb-8">
          {el.teaser.teaser_subtitle}
        </Text>
        <div className="ml-10 md:ml-16 mb-7.5r hashtags-home">{hashtags}</div>
      </div>
    </div>
  );
}
