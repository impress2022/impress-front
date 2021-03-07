import Layout from "../../components/layout";
import Image from "next/image";
import Head from "next/head";
import Text from "../../components/typography/text";
import SquareGrid from "../../components/common/squareGrid";
import PostThumbnail from "../../components/blog/postThumbnail";
import Link from "next/link";
import React from 'react';
import Fade from 'react-reveal/Fade';
import { format } from 'date-fns'
import pl from 'date-fns/locale/pl';

export async function getStaticProps(context) {
  const headers = context.preview ?
    { headers: { 'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`} } : {}

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/295", headers);
  const data = await res.json();

  const posts = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?filter[cat]=9", headers
  );

  const dataPosts = await posts.json();

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
      posts: dataPosts,
      notFound: false,
    },
  };
}

export default function Blog(props) {
  const squares = (
    <SquareGrid colors={["grey", "green", "red", "green"]} href={"/co-robimy"}>
      <div className="cursor-pointer">
        <Text
          size="h3"
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 md:top-16 lg:top-24 z-10 footer-square-text"
        >
          Zobacz co możemy Ci zaproponować
        </Text>
        <svg
          style={{ width: '24px', height: "auto" }}
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

  const promoted = props.data.acf.promoted_post[0];
  const posts = props.posts.filter((item, index) => {
    return item.id !== props.data.acf.promoted_post[0].ID;
  });

  const parseDate = (input, format) => {
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g),
      i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
  }

  let dat = parseDate(promoted.post_date);
  const d = format(dat, 'dd MMMM yyyy', { locale: pl, });

  return (
    <>
      <Head>
        <title>Blog | ImPress PR & Marketing</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Blog."
        />
      </Head>
      <Layout squares={squares} menu={props.menu}>
        <header className="mb-12 md:mb-24 lg:mb-12 xl:mb-36 mt-16 lg:mt-16 xl:mt-8r md:mt-7.5r">
          <Text size="h2" custom="mb-8">
            {props.data.acf.header_title}
          </Text>
          <Text
            size="body-18"
            custom="md:text-1.5 md:leading-11 lg:max-w-803 lg:text-1.75 lg:leading-3r"
          >
            {props.data.acf.header_description}
          </Text>
        </header>
        <main className="mb-600">
          <section className="md:grid md:grid-cols-12 md:items-center">
            <Fade left>
              <div className="md:col-span-8">
                <Link href={"/post/" + promoted.post_name}>
                  <a className="group">
                    <div className="relative block-important art-transition group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive group-hover:-translate-y-2.5 h-400 md:min-h-60">
                      <Image
                        src={promoted.acf.main_image.sizes["1536x1536"]}
                        layout="fill"
                        objectFit="cover"
                        alt={promoted.acf.main_image.alt}
                      />
                    </div>
                    <div className="md:col-span-5 md:grid md:grid-cols-8">
                      <Text size="h3" custom="mt-10 md:col-span-5">
                        {promoted.post_title}
                      </Text>
                      <Text
                        size="p"
                        custom="text-0.75 font-bold font-aller opacity-30 mt-4 md:col-span-5"
                      >
                        {d}
                      </Text>
                      <Text size="body-18" custom="mt-4 md:col-span-5">
                        {promoted.acf.promoted_content
                          ? promoted.acf.promoted_content
                          : ""}
                      </Text>
                    </div>
                  </a>
                </Link>
              </div>
            </Fade>
          </section>
          <section className="md:col-span-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-x-28 lg:gap-y-20 md:mt-24">
            {posts.map((item, index) => (
                item.acf.main_image && ( <Fade left>
                 <PostThumbnail key={index} image={item} />
              </Fade>)
            ))}
          </section>
        </main>
      </Layout>
    </>
  );
}
