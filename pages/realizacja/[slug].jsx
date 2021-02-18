import Layout from "../../components/layout";
import Text from "../../components/typography/text";
import Image from "next/image";
import classNames from "classnames";
import Goal from "../../components/case-study/goal";
import Head from "next/head";
import React from "react";
import Gallery from "../../components/case-study/gallery";
import Slider from "../../components/case-study/slider";
import useWindowSize from "../../hooks/useWindowSize";
import Square from "../../components/square";
import SquareGrid from "../../components/common/squareGrid";

export async function getStaticPaths() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?_fields=slug&filter[cat]=3"
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const { slug } = context.query;
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/wp/v2/posts?slug=${params.slug}`
  );
  const data = await res.json();

  const allPostsIds = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/wp/v2/posts?_fields=id,title,slug&orderby=id&order=asc&filter[cat]=3`
  );

  const allPostsIdsData = await allPostsIds.json();

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
      posts: allPostsIdsData,
      notFound: false,
    },
  };
}

const Post = (props) => {
  const page = props.data[0].acf;
  const windowSize = useWindowSize();

  const pageId = props.data[0].id;
  let index = props.posts.findIndex((el) => el.id === pageId);
  const nextPage =
    props.posts[index === props.posts.length - 1 ? 0 : index + 1];

  let hashtags = [];

  page.teaser.teaser_hashtags.map((item, index) => {
    hashtags.push(
      <div key={index} className="inline-block mr-1">
        {item.teaser_hashtag}&nbsp;
      </div>
    );
  });

  let textHeaderClasses = classNames({
    "tracking-widest md:text-0.5 font-bold uppercase mb-8 font-aller": true,
  });

  const titleSection = (
    <div className="mt-7.5r lg:mt-24 mb-2.625 md:mb-24 lg:mb-8r">
      <Text size="h2" custom="mb-8">
        {page.header_title}
      </Text>
      <Text size="body-18" custom="md:text-1.5 md:leading-2.625">
        {page.header_description}
      </Text>
    </div>
  );

  const fluidPhoto = (
    <div className="flex justify-center relative">
      <Image
        quality={100}
        src={page.main_image.sizes["twentytwenty-fullscreen"]}
        alt={page.main_image.alt}
        width={page.main_image.sizes["twentytwenty-fullscreen-width"]}
        height={page.main_image.sizes["twentytwenty-fullscreen-height"]}
        className="shadow-caseInset"
      />
    </div>
  );

  const fluidSlider = page.slider_efects && (
    <section className="pl-8 md:pl-16 lg:pl-24 mt-7.5r md:mt-8r mb-500 md:mb-500 xl:mb-700 xl:my-s-mar relative">
      <div className="absolute bg-green right-0 top-0 h-full w-1/4 md:w-1/3 lg:w-1/2">
        <Square
          sizeClasses="md:w-x1 md:h-x1 lg:w-x2 lg:h-x2"
          color="blue"
          customWrapper="hidden md:block md:transform md:rotate-180 md:origin-top-left"
        />
      </div>
      <div className="mb-16 lg:mb-24">
        {windowSize.width < 768 && (
          <Text size="h2">
            Efekty, które <br /> zaowocowały
          </Text>
        )}
        {windowSize.width >= 768 && (
          <Text size="h2">Efekty, które zaowocowały</Text>
        )}
      </div>
      <Slider data={page.slider_efects} />
    </section>
  );

  const squares = (
    <SquareGrid
      colors={["grey", "green", "green", "red"]}
      href={`/realizacja/${nextPage.slug}`}
    >
      <div className="cursor-pointer">
        <p className="tracking-widest md:text-0.5 font-bold uppercase mb-8 font-aller absolute w-64 md:w-500 left-10 md:left-16 lg:left-1/2 top-10 md:top-5 z-10">
          Następny projekt
        </p>
        <Text
          size="h1"
          custom="absolute w-64 md:w-500 left-10 md:left-16 md:top-12 lg:left-1/2 top-20 z-10"
        >
          {nextPage.title.rendered}
        </Text>
        <svg
          className="hidden md:block absolute left-16 md:left-8 md:left-1/3 top-44 md:top-36 lg:left-48 lg:top-1/2 md:top-32 z-10"
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

  let contClassess = classNames({
    "mb-500 md:mb-500 xl:mb-700": !fluidSlider,
  });

  return (
    <>
      <Head>
        <title>{page.header_title} - Impress</title>
        <meta
          name="Description"
          content={"ImpressPR - agencja marketingowa. " + page.header_title}
        />
      </Head>
      <Layout
        menu={props.menu}
        titleSection={titleSection}
        fluidPhoto={fluidPhoto}
        fluid={fluidSlider}
        squares={squares}
      >
        <div className={contClassess}>
          <section className="md:flex">
            <div className="mt-2.625 md:flex-1 md:max-w-sm lg:max-w-690">
              <p className={textHeaderClasses}>{page.company_date}</p>
              <Text size="body-18" custom="md:text-1.5 md:leading-2.625">
                {page.company_desc}
              </Text>
            </div>
            <div className="mt-2.625 md:flex-1 md:ml-20 md:max-w-screen-sm lg:max-w-460">
              <p className={textHeaderClasses}>Zakres działań</p>
              <div className="text-1.125 leading-8 font-bold font-aller">
                {hashtags}
              </div>
            </div>
          </section>
          <section className="mt-7.5r md:mt-150 lg:mt-s-mar mb-5.625 md:mb-150 xl:mb-0">
            <Text size="h2" custom="mb-20 md:mb-8 lg:mb-20">
              Cele, które postanowiliśmy osiągnąć
            </Text>
            <div className="md:grid md:grid-cols-12">
              {page.goals.map((el, index) => (
                <div
                  key={index}
                  className="mt-15 md:col-span-4 md:max-w-14 lg:max-w-26.875"
                >
                  <Goal squareCount={index + 1}>
                    <Text
                      size="body-16"
                      custom="mt-10 lg:text-1.125 lg:leading-8"
                    >
                      {el.goal}
                    </Text>
                  </Goal>
                </div>
              ))}
            </div>
          </section>
          {page.gallery.length > 2 && (
            <section className="xl:my-s-mar">
              <Gallery photos={page.gallery} data={page.gallery_break} />
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Post;
