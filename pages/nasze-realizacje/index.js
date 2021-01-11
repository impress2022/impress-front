import Layout from "../../components/layout";
import Tags from "../../components/tags";
import { useState } from "react";
import Grid from "../../components/realizations/grid";
import Head from "next/head";
import Text from "../../components/typography/text";
import Logos from "../../components/common/logos";
import Square from "../../components/square";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/pages/7')
  const data = await res.json()

  const realizations = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/posts?filter[cat]=3')
  const dataRealizations = await realizations.json()

  const resPosts = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/posts?_fields=id,tags&orderby=id&order=asc&filter[cat]=3');
  const dataPosts = await resPosts.json()

  const resTags = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/tags');
  const dataTags = await resTags.json()

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
        notFound: true
      },
    }
  }

  return {
    props: {
      data: data,
      tags: dataTags,
      realizations: dataRealizations,
      dict: dataPosts,
      notFound: false
    },
  }
}

export default function Realizations(props) {
  let realizations = props.realizations
  const [filter, setFilter] = useState(999);

  if (filter !== 999) {
    realizations = realizations.filter((item, index) => {
        return props.dict[index].tags.includes(filter);
    })
  }

  const grid = (
    <div className="-mt-80 py-80 bg-green">
      <div className="my-20 container mx-auto">
        <Logos/>
      </div>
    </div>
  )

  const squares = (
    <div className="absolute -top-14.375 left-0 right-0 container mx-auto">
      <Square size="2" color="grey" customWrapper="hidden lg:block"/>
      <Square size="3" color="blue" custom="" customWrapper="absolute">
        <Text size="h3" custom="absolute left-10 top-10 z-10">Zobacz, co możemy Ci zaproponować</Text>
      </Square>
      <Square size="2" color="green" customWrapper="hidden lg:block"/>
      <Square size="1" color="red" customWrapper="hidden lg:block"/>
    </div>
  )

  return (
    <>
      <Head>
        <title>Realizacje - Impress</title>
      </Head>
      <Layout fluid={grid} squares={squares}>
        <div className="mb-12 md:mb-24 lg:mb-36 lg:mb- mt-8r md:mt-7.5r">
          <Text size="h2" custom="mb-8">{props.data.acf.header_title}</Text>
          <Text size="body-18" custom="md:text-1.5 md:leading-11 lg:text-1.75 lg:leading-3r">{props.data.acf.header_description}</Text>
        </div>
        <div>
          <div className="mb-7.5r md:mb-8r lg:mb-48">
            <Tags filter={filter} setFilter={setFilter} tags={props.tags}/>
          </div>
          {realizations.length > 0 &&
            <Grid realizations={realizations}/>
          }
          {realizations.length === 0 &&
            <h2>Czegoś takiego jeszcze nie mamy. <b className="underline">Spotkajmy się</b> aby o tym porozmawiać.</h2>
          }
        </div>
      </Layout>
      </>
  )
}