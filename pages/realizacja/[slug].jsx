import Layout from "../../components/layout";
import Text from "../../components/typography/text";
import Image from "next/image";
import classNames from "classnames";
import Goal from "../../components/case-study/goal";
import Head from "next/head";
import React from "react";
import Gallery from "../../components/case-study/gallery";

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/wp/v2/posts?slug=${slug}`
  );
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

const Post = (props) => {
  const page = props.data[0].acf;
  console.log(page);

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
        src={page.main_image.url}
        alt={page.main_image.alt}
        height={page.main_image.height}
        width={page.main_image.width}
        className="shadow-caseInset"
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>{page.header_title} - Impress</title>
      </Head>
      <Layout titleSection={titleSection} fluidPhoto={fluidPhoto}>
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
        <section className="mt-7.5r md:mt-150 lg:mt-s-mar mb-5.625 md:mb-150 lg:mb-s-mar">
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
        <section>
          <Gallery photos={page.gallery} data={page.gallery_break} />
        </section>
      </Layout>
    </>
  );
};

export default Post;
