import Layout from "../../components/layout";
import Tags from "../../components/tags";
import { useState } from "react";
import Grid from "../../components/realizations/grid";
import Head from "next/head";
import Text from "../../components/typography/text";
import Logos from "../../components/common/logos";
import SquareGrid from "../../components/common/squareGrid";
import Link from "next/link";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/7");
  const data = await res.json();

  const realizations = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?filter[cat]=3"
  );
  const dataRealizations = await realizations.json();

  const resPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/wp/v2/posts?_fields=id,tags&orderby=id&order=asc&filter[cat]=3"
  );
  const dataPosts = await resPosts.json();

  const resTags = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/tags");
  const dataTags = await resTags.json();

  dataTags.unshift({
    id: 999,
    link: "",
    meta: [],
    name: "Wszystkie",
    slug: "wszystkie",
    taxonomy: "post_tag",
  });

  dataTags.push({
    id: 998,
    link: "",
    meta: [],
    name: "Content marketing",
    slug: "content-marketing",
    taxonomy: "post_tag",
  });

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
      tags: dataTags,
      realizations: dataRealizations,
      dict: dataPosts,
      notFound: false,
    },
  };
}

export default function Realizations(props) {
  let realizations = props.realizations;
  const [filter, setFilter] = useState(999);

  if (filter !== 999) {
    realizations = realizations.filter((item, index) => {
      return props.dict[index].tags.includes(filter);
    });
  }

  const grid = (
    <div className="-mt-80 py-80 md:py-96 lg:py-132 lg:-mt-104 bg-green">
      <div className="my-20 container mx-auto">
        <Logos />
      </div>
    </div>
  );

  const squares = (
    <SquareGrid colors={["grey", "blue", "green", "red"]} href={"/kontakt"}>
      <div className="cursor-pointer">
        <Text
          size="h3"
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 z-10"
        >
          Zobacz, co możemy Ci zaproponować
        </Text>
        <svg
          className="absolute left-10 md:left-8 lg:left-1/2 top-44 md:top-32 z-10"
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
        <title>Realizacje - Impress</title>
      </Head>
      <Layout fluid={grid} squares={squares}>
        <header className="mb-12 md:mb-24 lg:mb-12 xl:mb-36 mt-8r lg:mt-16 xl:mt-8r md:mt-7.5r">
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
        <main>
          <div className="mb-7.5r md:mb-8r lg:mb-16 xl:mb-48">
            <Tags filter={filter} setFilter={setFilter} tags={props.tags} />
          </div>
          {realizations.length > 0 && <Grid realizations={realizations} />}
          {realizations.length === 0 && (
            <Text
              size="h2"
              custom="min-h-screen md:text-center lg:text-left md:min-h-60"
            >
              Takiej realizacji jeszcze nie mamy, ale ogarniemy. <br />
              <b className="underline">Spotkajmy się,</b> porozmawiajmy.
            </Text>
          )}
        </main>
      </Layout>
    </>
  );
}
