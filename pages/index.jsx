import Layout from "../components/layout";
import HomeHero from "../components/lottie/homeHero";
import Text from "../components/typography/text";
import Logos from "../components/common/logos";
import ThinArrow from "../components/common/thinArrow";
import React, { useState } from "react";
import FeaturedRealizationsMobile from "../components/home/featuredRealizationsMobile";
import useWindowSize from "../hooks/useWindowSize";
import FeaturedRealizations from "../components/home/featuredRealizations";
import Square from "../components/square";
import Link from "next/link";
import SingleSquare from "../components/common/singleSquare";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/69");
  const data = await res.json();

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
      notFound: false,
    },
  };
}

export default function Home(props) {
  let content = props.data.acf;
  const window = useWindowSize();
  console.log(content);
  return (
    <Layout>
      <section className="md:relative mt-20 md:mt-12 lg:mt-0 mb-12 md:mb-s-mar leading-0.875 md:grid md:grid-cols-12">
        <div className="mb-10 md:col-span-5 md:mt-16 lg:mt-s-mar">
          <Text
            size="body-12"
            custom="font-bold uppercase tracking-widest mb-0.625 lg:mb-5 text-center md:text-left"
          >
            {content.first_section_slogan}
          </Text>
          <Text
            size="h1"
            custom="mb-5 text-center md:text-left px-8 md:px-0 md:pr-8 lg:pr-16 lg:text-4.375 lg:leading-5 lg:tracking-hero"
          >
            {content.first_section_header}
          </Text>
          <Text
            size="body-18"
            custom="text-center md:text-left md:pr-12 lg:pr-16 lg:text-1.5 lg:leading-2.625 lg:tracking-desc"
          >
            {content.first_section_description}
          </Text>
        </div>
        <HomeHero custom="w-44 h-44 md:col-span-5" />
        <a href="#realizacje">
          <ThinArrow custom="hidden md:block md:absolute md:-bottom-6r lg:bottom-0 md:left-0" />
        </a>
      </section>
      <section className="md:mb-s-mar">
        <div className="my-20 container mx-auto">
          <Logos />
        </div>
      </section>
      <section id="realizacje" className="pt-10 md:pt-0">
        <Text size="h2" custom="pb-5.25 md:pb-7.25 lg:pb-0 lg:mb-s-mar">
          Poznaj nasze realizacje
        </Text>
        {window.width < 1380 && (
          <FeaturedRealizationsMobile realizations={content.realizations} />
        )}
        {window.width >= 1380 && (
          <FeaturedRealizations realizations={content.realizations} />
        )}
        <SingleSquare>Zobacz, mamy ich trochę więcej</SingleSquare>
      </section>
      <section className="hidden md:grid md:grid-cols-12 md:grid-rows-1 md:mb-7.5r">
        <header className="md:col-span-4">
          <Text size="h2" custom="md:text-left lg:text-center">
            {content.third_section_header}
          </Text>
        </header>
        <div className="md:col-span-8">
          <div className="md:mb-8">
            <Text size="body-18" custom="lg:text-1.5 lg:leading-2.625">
              {content.third_section_description}
            </Text>
          </div>
          <div>
            <Link href="/co-robimy/">
              <a>
                <Text size="body-bold-18">Poznaj szczegóły oferty</Text>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
