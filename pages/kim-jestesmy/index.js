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

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/11");
  const data = await res.json();

  const resMenu = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/105"
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
      data={{
        title: page.subpage_title,
        subtitle: page.subpage_subtitle,
        photo: page.subpage_main_image,
        lesser_photo: page.subpage_lesser_image,
      }}
    />
  );
  const HeroDesc = (
    <SubpageHeroDesc
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
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 z-10"
        >
          Zobacz nasze realizacje
        </Text>
        <svg
          className="absolute left-10 md:left-8 lg:left-1/2 top-44 md:top-32 z-10 animate-bounce-slow-diag"
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
    marketing: "Marketing",
    social: "Social Media",
    design: "Design",
  };

  let lotties = [];

  for (const key in icons) {
    let lottieClasses = classNames({
      "w-full h-24 flex items-center lg:hover:shadow-dark-wide transition duration-200 ease-linear cursor-pointer": true,
      "bg-grey-hover": key === "design",
      "bg-red": key === "marketing",
      "bg-dark-green": key === "pr",
      "bg-blue": key === "social",
    });

    lotties.push(
      <Link key={key} href={"/co-robimy#" + key}>
        <a>
          <div className={lottieClasses}>
            <SubpagesLottie
              lottie={key}
              key={key}
              custom="h-20 w-20 m-2"
              autoplay={false}
              isStopped={true}
            />
            <Text size="h3" color="white">
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
    const imageClassess = classNames({
      "block-important shadow-caseInsetMobile md:shadow-caseInset relative mini-gallery-image": true,
      "w-full h-320 md:h-390 lg:h-625 col-span-2 row-span-2 md:row-span-4":
        imagesArray[index].gallery_image_2x,
      "flex-40 h-155 md:h-220 lg:h-345": !imagesArray[index].gallery_image_2x,
    });

    images.push(
      <div key={index} className={imageClassess}>
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
        <title>Kim jesteśmy - Impress</title>
      </Head>
      <Layout
        titleSection={Hero}
        fluidPhoto={HeroDesc}
        squares={squares}
        menu={props.menu}
      >
        <section className="mb-400 lg:mb-700">
          <div className="md:mx-4 my-7.5r md:my-8r md:my-s-mar">
            <Text
              size="body-18"
              custom="lg:text-1.5 lg:leading-2.625 mb-12 md:mb-20 lg:max-w-803"
            >
              {page.subpage_content}
            </Text>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 ">
              {lotties}
            </div>
          </div>
          <div className="lg:mt-300">
            <div className="md:max-w-50 lg:max-w-803 mb-24 xl:mb-150">
              <Text size="body-18" custom="lg:text-1.5 lg:leading-2.625">
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
