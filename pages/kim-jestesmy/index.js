import Layout from "../../components/layout";
import SubpageHero from "../../components/common/SubpageHero";
import SubpageHeroDesc from "../../components/common/SubpageHeroDesc";
import SquareGrid from "../../components/common/squareGrid";
import Text from "../../components/typography/text";
import Image from "next/image";
import SubpagesLottie from "../../components/lottie/subpagesLottie";
import classNames from "classnames";
import Link from "next/link";
import Head from "next/head";
import useWindowSize from "../../hooks/useWindowSize";
import {useEffect, useRef, useState} from "react";

export async function getStaticProps(context) {
  const headers = context.preview ?
    { headers: { 'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`} } : {}

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/11", headers);
  const data = await res.json();

  const resMenu = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/105", headers
  );
  const menu = await resMenu.json();

  if (!data) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      data: data,
      menu: menu.acf,
      notFound: false,
    },
  };
}

export default function About(props) {
  const page = props.data.acf;

  const Hero = (
    <SubpageHero
      isImage={true}
      data={{
        title: page.subpage_title,
        subtitle: page.subpage_subtitle,
        photo: page.subpage_main_image,
        lesser_photo: page.subpage_lesser_image,
        desc: page.subpage_lesser_desc,
        b_desc: page.subpage_bigger_desc,
      }}
    />
  );
  const HeroDesc = (
    <SubpageHeroDesc
      color='green'
      isImage={true}
      data={{
        desc: page.subpage_lesser_desc,
        b_desc: page.subpage_bigger_desc,
        photo: page.subpage_lesser_image,
      }}
    />
  );

  const squares = (
    <SquareGrid
      colors={["grey", "green", "green", "red"]}
      href={"/nasze-realizacje"}
    >
      <div className="cursor-pointer">
        <Text
          size="h3"
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-7 md:top-16 lg:top-24 z-10 footer-square-text"
        >
          Zobacz nasze realizacje
        </Text>
        <svg
          className="absolute left-10 md:left-8 lg:left-1/2 top-24 md:top-32 lg:top-44 footer-square-arrow z-10 animate-bounce-slow-diag"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.67752 1.31135e-07H33.6775V4H5.67752V1.31135e-07Z"
            fill="#202222"
          />
          <path
            d="M29.6775 28L29.6775 0L33.6775 1.31135e-07V28H29.6775Z"
            fill="#202222"
          />
          <path
            d="M28.87 1.97924L31.6984 4.80767L3.41412 33.0919L0.585693 30.2635L28.87 1.97924Z"
            fill="#202222"
          />
        </svg>
      </div>
    </SquareGrid>
  );

  const icons = {
    pr: "Public Relations",
    social: "Social Media",
    marketing: "Marketing",
    design: "Design",
  };

  let lotties = [];

  const windowSize = useWindowSize();

  const lottieWrapper = classNames({
    "grid grid-cols-2 md:grid-cols-4 lottie-stairs": true,
    "container mx-auto": windowSize.width < 768,
  })

  for (const key in icons) {
    let lottieClasses = classNames({
      "w-full h-160 md:h-auto flex flex-col items-center justify-center lg:hover:shadow-dark-wide transition duration-200 ease-out cursor-pointer": true,
      "bg-grey-hover": key === "design",
      "bg-red": key === "marketing",
      "bg-dark-green": key === "pr",
      "bg-blue": key === "social",
    });

    lotties.push(
      <Link key={key} href={"/co-robimy#" + key}>
        <a className="flex flex-row relative ratio-square-md">
          <div className={lottieClasses}>
            <SubpagesLottie
              lottie={key}
              key={key}
              custom="h-20 w-20 m-4 lg:m-6"
              innerCustom="md:h-x2 md:w-x2 md:transform lg:scale-125 lg:w-180 lg:h-180"
            />
            <Text size="body-bold-18" color="white" custom="mb-0 lg:mt-12 lg:text-1.625 md:leading-7 lg:leading-2.125">
              {icons[key]}
            </Text>
          </div>
        </a>
      </Link>
    );
  }

  let images = [];

  const imagesArray = page.subpage_mini_gallery.gallery_images;

  for (const index in imagesArray) {
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

    const imageClassess = classNames({
      "block-important relative ratio-square-md mini-gallery-image": true,
      "w-full h-320 md:h-390 lg:h-625 col-span-2 row-span-2 md:row-span-4":
        imagesArray[index].gallery_image_2x,
      "flex-40 h-155 md:h-220 lg:h-345": !imagesArray[index].gallery_image_2x,
    });

    images.push(
      <div key={index} className={imageClassess} ref={wrapper} style={{ height: customHeight + 'px'}}>
        <Image
          quality={100}
          src={imagesArray[index].gallery_image.sizes["post-thumbnail"]}
          layout="fill"
          alt={imagesArray[index].gallery_image.alt}
          objectFit="cover"
        />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Kim jesteśmy | ImPress PR & Marketing</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Kim jesteśmy."
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL + "kim-jestesmy"} />
      </Head>
      <Layout
        titleSection={Hero}
        fluidPhoto={HeroDesc}
        squares={squares}
        menu={props.menu}
      >
        <section className="mb-400 md:mb-300 lg:mb-500 mt-7.5r md:mt-24 lg:mt-0">
          <div className="md:mx-4 mb-14 md:mb-7.5r lg:mb-s-mar">
            <Text
              size="body-18"
              custom="lg:text-1.5 lg:leading-2.625 mb-12 md:mb-20 lg:mb-200 lg:max-w-803"
            >
              {page.subpage_content}
            </Text>
            <div className={lottieWrapper}>
              {lotties}
            </div>
          </div>
          <div className="lg:mt-400">
            <div className="md:max-w-50 lg:max-w-803 mb-12 md:mb-24 xl:mb-150">
              <Text size="body-18" custom="lg:text-1.5 lg:leading-2.625 lg:pr-8">
                {page.subpage_mini_gallery.gallery_text}
              </Text>
            </div>
            <div className="grid grid-cols-2 gap-4 gap-6 md:grid-cols-4">
              {images}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
