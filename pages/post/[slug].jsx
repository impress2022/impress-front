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

  console.log(data);

  return {
    props: {
      data: data,
      menu: menu.acf,
      notFound: false,
    },
  };
}

const BlogPost = (props) => {
  const squares = <SquareGrid colors={["grey", "green", "green", "red"]} />;
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
      </Head>
      <Layout squares={squares} menu={menu}>
        <section className="md:grid md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="my-10 mb-16">
              <p className="max-w-90 mb-4 tracking-widest md:text-0.5 font-bold uppercase font-aller">
                Impress blog
              </p>
              <Text size="h2" custom="md:col-span-5">
                {props.data[0].title.rendered}
              </Text>
              <Text
                size="p"
                custom="text-0.75 font-bold font-aller opacity-30 mt-6 md:col-span-5"
              >
                {`${da} ${mo} ${ye}`}
              </Text>
            </div>
          </div>
          <div className="relative block-important shadow-caseInsetMobile lg:shadow-caseInset w-full md:col-span-12 md:h-50vh">
            <Image
              src={page.main_image.sizes["twentytwenty-fullscreen"]}
              objectFit="cover"
              layout="fill"
              alt={page.main_image.alt}
            />
          </div>
        </section>
        <section className="mb-600 mt-7.5r md:mt-8r md:grid md:grid-cols-12 wysiwyg">
          <div className="social-media w-full">
            <Social menu={menu} />
          </div>
          <div
            className="md:col-span-11"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </section>
      </Layout>
    </>
  );
};

export default BlogPost;
