import Layout from "../../components/layout";
import SubpageHero from "../../components/common/SubpageHero";
import SubpageHeroDescCoRobimy from "../../components/common/SubpageHeroDescCoRobimy";
import SquareGrid from "../../components/common/squareGrid";
import Text from "../../components/typography/text";
import Activity from "../../components/co-robimy/activity";
import Head from "next/head";

export async function getStaticProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/9");
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

export default function Work(props) {
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
    <SubpageHeroDescCoRobimy
      color='blue'
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
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 md:top-16 lg:top-24 z-10 footer-square-text"
        >
          Zobacz co dotychczas zrobiliśmy
        </Text>
        <svg
          className="absolute left-10 md:left-8 lg:left-1/2 top-44 md:top-32 lg:top-44 footer-square-arrow z-10 animate-bounce-slow-diag"
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

  return (
    <>
      <Head>
        <title>Co robimy - Impress</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Co robimy."
        />
      </Head>
      <Layout
        titleSection={Hero}
        fluidPhoto={HeroDesc}
        squares={squares}
        menu={props.menu}
      >
        {/*md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12*/}
        <section className="mb-300 lg:mb-600 co-robimy-section md:flex md:flex-wrap md:justify-between">
          {page.activities.map((item, index) => (
            <Activity key={index} activity={item} />
          ))}
        </section>
      </Layout>
    </>
  );
}
