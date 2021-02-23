import Layout from "../../components/layout";
import Head from "next/head";
import React from "react";
import SquareGrid from "../../components/common/squareGrid";
import Image from "next/image";
import Text from "../../components/typography/text";
import Social from "../../components/social";

export async function getStaticPaths() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?_fields=slug&filter[cat]=9"
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

  const resMenu = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/105"
  );
  const menu = await resMenu.json();

  return {
    props: {
      data: data,
      menu: menu.acf,
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
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 md:top-16 lg:top-24 z-10"
        >
          Wróć do wszystkich wpisów
        </Text>
        <svg
          style={{ width: '24px', height: "auto" }}
          className="absolute left-10 md:left-8 lg:left-1/2 top-44 md:top-32 lg:top-44 z-10 animate-bounce-slow-diag"
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

  const page = props.data[0].acf;
  const menu = props.menu;

  const d = new Date(props.data[0].date);
  const ye = new Intl.DateTimeFormat("pl", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("pl", { month: "long" }).format(d);
  mo = mo.charAt(0).toUpperCase() + mo.slice(1);
  const da = new Intl.DateTimeFormat("pl", { day: "2-digit" }).format(d);

  return (
    <>
      <Head>
        <title>{props.data[0].title.rendered} - Impress</title>
        <meta
          name="Description"
          content={
            "ImpressPR - agencja marketingowa. " + props.data[0].title.rendered
          }
        />
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
                  {props.data[0].title.rendered}
                </Text>
                <time
                  itemProp="datePublished"
                  dateTime={`${da} ${mo} ${ye}`}
                  className="text-0.75 font-bold font-aller opacity-30 mt-6 md:col-span-5"
                >
                  {`${da} ${mo} ${ye}`}
                </time>
              </div>
            </div>
            <figure className="relative block-important shadow-caseInsetMobile lg:shadow-caseInset w-full md:col-span-12 md:h-50vh">
              <Image
                src={page.main_image.sizes["twentytwenty-fullscreen"]}
                objectFit="cover"
                layout="fill"
                alt={page.main_image.alt}
              />
            </figure>
          </header>
          <section className="mb-600 mt-7.5r md:mt-8r md:grid md:grid-cols-12 wysiwyg">
            <div className="social-media w-full">
              <Social menu={menu} />
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
