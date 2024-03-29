import Layout from "../../components/layout";
import Tags from "../../components/tags";
import { useState } from "react";
import Grid from "../../components/realizations/grid";
import Head from "next/head";
import Text from "../../components/typography/text";
import Logos from "../../components/common/logos";
import SquareGrid from "../../components/common/squareGrid";
import classNames from "classnames";

export async function getStaticProps(context) {
  const headers = context.preview
    ? {
        headers: {
          Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
        },
      }
    : {};

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/7?_fields=acf",
    headers
  );

  const data = await res.json();
  const realizations = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/posts?filter[cat]=3&per_page=99",
    headers
  );

  const dataRealizations = await realizations.json();

  const resPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/wp/v2/posts?_fields=id,tags&orderby=id&order=asc&filter[cat]=3&per_page=99",
    headers
  );
  const dataPosts = await resPosts.json();

  const resTags = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/tags?per_page=100",
    headers
  );
  const dataTags = await resTags.json();

  dataTags.unshift({
    id: 999,
    link: "",
    meta: [],
    name: "Wszystkie",
    slug: "wszystkie",
    taxonomy: "post_tag",
  });

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
      tags: dataTags,
      menu: menu.acf,
      realizations: dataRealizations,
      dict: dataPosts,
      notFound: false,
    },
  };
}

export default function Realizations(props) {
  let realizations = props.realizations;
  const [filter, setFilter] = useState(999);
  const sortingTable = props.data.acf.realizations;

  const customSort = (a, b) => {
    const idA = sortingTable.indexOf(a.id);
    const idB = sortingTable.indexOf(b.id);

    // If both IDs are in sortingOrder, sort based on their position
    if (idA !== -1 && idB !== -1) {
      return idA - idB;
    }

    // If only one ID is in sortingOrder, prioritize the one present
    if (idA !== -1) {
      return -1;
    }
    if (idB !== -1) {
      return 1;
    }

    // If both IDs are not in sortingOrder, maintain their original order
    return 0;
  };

  if (sortingTable.length > 0) {
    realizations = realizations.sort(customSort);
  }

  if (filter !== 999) {
    realizations = realizations.filter((item) => {
      let id = item.id;
      let tags = props.dict.filter((dictItem) => dictItem.id === id)[0].tags;

      return tags.includes(filter);
    });
  }

  const gridClassess = classNames({
    "bg-green": true,
    "-mt-80 lg:-mt-116 py-80 md:py-96 lg:py-108": realizations.length !== 0,
    "lg:mt-0 pt-12 pb-80 md:pb-96 lg:pb-108": realizations.length === 0,
  });
  const grid = (
    <div className={gridClassess}>
      <div className="my-20 mx-7 md:mx-16 lg:mx-7.5r">
        <Logos menu={props.menu} />
      </div>
    </div>
  );

  const squares = (
    <SquareGrid colors={["grey", "blue", "green", "red"]} href={"/co-robimy"}>
      <div className="cursor-pointer">
        <Text
          size="h3"
          custom="absolute w-64 md:w-500 left-10 md:left-8 lg:left-1/2 top-10 md:top-16 lg:top-24 z-10 footer-square-text"
        >
          Zobacz co możemy Ci zaproponować
        </Text>
        <svg
          style={{ width: "24px", height: "auto" }}
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

  return (
    <>
      <Head>
        <title>Realizacje | ImPress PR & Marketing</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Nasze realizacje."
        />
        <meta
          property="og:title"
          content="ImPress PR & Marketing | Nasze realizacje"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_FRONT_URL + "images/logo-thumb.jpg"}
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_FRONT_URL + "nasze-realizacje"}
        />
      </Head>
      <Layout fluid={grid} squares={squares} menu={props.menu}>
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
        <main>
          <div className="mb-7.5r md:mb-8r lg:mb-16 xl:mb-48">
            <Tags filter={filter} setFilter={setFilter} tags={props.tags} />
          </div>
          {realizations.length > 0 && <Grid realizations={realizations} />}
          {realizations.length === 0 && (
            <Text size="h2" custom="md:text-center lg:text-left pb-24">
              Takiej realizacji jeszcze nie mamy, ale ogarniemy. <br />
              <b className="underline">Spotkajmy się,</b> porozmawiajmy.
            </Text>
          )}
        </main>
      </Layout>
    </>
  );
}
