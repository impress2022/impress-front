import Layout from "../components/layout";
import HomeHero from "../components/lottie/homeHero";
import Text from "../components/typography/text";
import Logos from "../components/common/logos";
import ThinArrow from "../components/common/thinArrow";
import React, { useState } from "react";
import FeaturedRealizationsMobile from "../components/home/featuredRealizationsMobile";
import useWindowSize from "../hooks/useWindowSize";
import FeaturedRealizations from "../components/home/featuredRealizations";
import Head from "next/head";
import Link from "next/link";
import SingleSquare from "../components/common/singleSquare";
import Card from "../components/common/card";
import Pulse from "react-reveal/Pulse";

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
  const colors = ["dark-green", "blue", "red", "grey-hover"];

  const items = ["pr", "social", "marketing", "design"];

  const window = useWindowSize();

  const fluid = (
    <section className="relative md:mt-300">
      <div className="absolute bottom-0 left-0 w-full h-80p md:-bottom-4 bg-grey z-0"></div>
      <div className="mx-10 mt-7.5r relative max-w-screen-sm mx-auto top-0 z-10 md:grid md:grid-cols-12 md:container md:mx-auto">
        {content.fourth_section.map((item, index) => (
          <div key={index} className="md:col-span-3 lottie-card">
            <Card
              title={item.card_header}
              elements={item.card_items}
              lottie={items[index]}
              color={colors[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Head>
        <title>Impress - agencja marketingowa</title>
      </Head>
      <Layout fluid={fluid}>
        <section className="md:relative mt-20 md:mt-0 mb-12 md:mb-s-mar leading-0.875 md:flex md:justify-between md:items-center">
          <div className="mb-10 md:flex-50 lg:flex-none md:mt-16 md:max-w-sm lg:max-w-xl">
            <Text
              size="body-12"
              custom="font-bold uppercase tracking-widest mb-0.625 lg:mb-5 text-center md:text-left"
            >
              {content.first_section_slogan}
            </Text>
            <Pulse>
              <Text
                size="h1"
                custom="mb-5 text-center md:text-left px-8 md:px-0 md:pr-8 lg:pr-16 lg:text-4.375 lg:leading-5 lg:tracking-hero"
              >
                {content.first_section_header}
              </Text>
            </Pulse>
            <Text
              size="body-18"
              custom="text-center md:text-left md:pr-12 lg:pr-16 lg:text-1.5 lg:leading-2.625 lg:tracking-desc"
            >
              {content.first_section_description}
            </Text>
          </div>
          {/*<HomeHero custom="md:flex-50 lg:flex-none md:col-span-5" />*/}
          <ThinArrow custom="hidden md:block md:absolute md:-bottom-6r lg:bottom-0 md:left-0 animate-bounce-slow" />
        </section>
        <section className="md:mb-s-mar">
          <div className="my-20 lg:my-400 container mx-auto">
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
          <div>
            <SingleSquare>Zobacz, mamy ich trochę więcej</SingleSquare>
          </div>
        </section>
        <section className="hidden md:grid md:grid-cols-12 md:grid-rows-1 md:mt-s-mar lg:mt-300">
          <header className="md:col-span-4">
            <Text size="h2" custom="md:text-left lg:text-center">
              {content.third_section_header}
            </Text>
          </header>
          <div className="hidden md:block lg:hidden"></div>
          <div className="md:col-span-7 lg:md:col-span-8">
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
    </>
  );
}
