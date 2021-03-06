import Image from "next/image";
import Hashtag from "../common/hashtag";
import Text from "../typography/text";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

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

  return (
    <div className="flex flex-col items-center md:flex-row-reverse md:mb-36 md:justify-between lg:justify-around">
      <div className="w-full flex-100 md:flex-50" ref={wrapper}>
        <div className="hover:shadow-caseInsetActiveMobile md:hover:shadow-caseInsetHover art-transition w-full lg:h-438 lg:w-438 relative"
           style={{ height: customHeight + 'px'}}
        >
          <Link href={"/realizacja/" + props.element.post_name}>
            <a className="block-important">
              <Image
                src={el.teaser.teaser_photo.sizes["post-thumbnail"]}
                alt={el.teaser.teaser_photo.alt}
                layout="fill"
                objectFit="cover"
                className="block-important"
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
        <Text size="h2" custom="mb-8 md:max-w-sm">
          {el.teaser.teaser_subtitle}
        </Text>
        <div className="ml-10 md:ml-16 mb-7.5r hashtags-home">{hashtags}</div>
      </div>
    </div>
  );
}
