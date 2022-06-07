import Layout from "../../components/layout";
import Head from "next/head";
import React from "react";
import SquareGrid from "../../components/common/squareGrid";
import Image from "next/image";
import Text from "../../components/typography/text";
import Social from "../../components/social";
import useWindowSize from "../../hooks/useWindowSize";
import Pulse from 'react-reveal/Pulse';
import {format} from "date-fns";
import pl from "date-fns/locale/pl";

export async function getStaticPaths() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?_fields=slug&filter[cat]=9", { headers: { 'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`} }
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, previewData }) {
  const headers = preview ?
    { headers: { 'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`} } : {}
  // const { slug } = context.query;
  const res = await fetch(
    previewData ?
      process.env.NEXT_PUBLIC_API_URL + `/wp/v2/posts/${previewData.id}` :
      process.env.NEXT_PUBLIC_API_URL + `/wp/v2/posts?slug=${params.slug}`, headers
  );

  const data = await res.json();

  const resMenu = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/105", headers
  );
  const menu = await resMenu.json();

  return {
    props: {
      data: data,
      menu: menu.acf,
      preview: !!preview,
      notFound: false,
    },
  };
}

const BlogPost = (props) => {
  const squares = (
    <SquareGrid colors={["grey", "green", "red", "green"]} href={"/blog"}>
      <div className="cursor-pointer">
        <Text
          size="h3"
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 md:top-16 lg:top-24 z-10 footer-square-text"
        >
          Wróć do wszystkich wpisów
        </Text>
        <svg
          style={{ width: '24px', height: "auto" }}
          className="absolute left-10 md:left-8 lg:left-1/2 top-44 md:top-32 footer-square-arrow lg:top-44 z-10 animate-bounce-slow-diag"
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

  const page = props.preview ? props.data.acf : props.data[0].acf;
  const data = props.preview ? props.data : props.data[0];

  const menu = props.menu;
  const windowSize = useWindowSize();

  const parseDate = (input, format) => {
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g),
      i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
  }

  const dat = parseDate(props.preview ? props.data.date : props.data[0].date);
  const d = format(dat, 'dd MMMM yyyy', { locale: pl, });
  const d2 = format(dat, 'yyyy-mm-dd', { locale: pl, });

  return (
    <>
      <Head>
        <title>{data.title.rendered} | ImPress PR & Marketing</title>
        <meta
          name="Description"
          content={
            "ImpressPR - agencja marketingowa. " + data.title.rendered
          }
        />
        <meta property="og:title" content={data.title.rendered} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL + 'post/' + data.slug} />
        <meta property="og:image" content={page.main_image ? page.main_image.sizes["twentytwenty-fullscreen"] : ''} />
      </Head>
      <Layout squares={squares} menu={menu}>
        <article
          className="post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="post-header md:grid md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="my-10 mb-16">
                <p className="max-w-90 mb-4 tracking-widest md:text-0.5 font-bold uppercase font-aller">
                  Impress blog
                </p>
                <Text size="h2" custom="md:col-span-5">
                  {data.title.rendered}
                </Text>
                <time className="hidden"
                      itemProp="datePublished"
                      dateTime={d2}
                >
                  {d2}
                </time>
                <time
                  dateTime={d}
                  className="text-0.75 font-bold font-aller opacity-30 mt-6 md:col-span-5"
                >
                  {d}
                </time>
              </div>
            </div>
            <Pulse>
              <figure className="relative block-important w-full md:col-span-12 h-320 md:h-50vh">
                {page.main_image &&
                  <Image
                    src={page.main_image.sizes["twentytwenty-fullscreen"]}
                    objectFit="cover"
                    layout="fill"
                    alt={page.main_image.alt}
                  />
                }
              </figure>
            </Pulse>
          </header>
          <section className="mb-400 md:mb-300 lg:mb-500 mt-16 md:mt-8r md:grid md:grid-cols-12 wysiwyg">
            <div className="social-media w-full my-10 md:my-0">
              <Social menu={menu} flex={windowSize.width < 768}/>
            </div>
            <div
              itemProp="articleBody"
              className="md:col-span-11 post-content"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
