import Layout from "../../components/layout";
import Tags from "../../components/tags";
import { useState } from "react";
import Grid from "../../components/realizations/grid";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.API_URL + '/wp/v2/pages/7')
  const data = await res.json()

  const realizations = await fetch(process.env.API_URL + '/wp/v2/posts?filter[cat]=3')
  const dataRealizations = await realizations.json()

  const resPosts = await fetch(process.env.API_URL + '/wp/v2/posts?_fields=id,tags&orderby=id&order=asc&filter[cat]=3');
  const dataPosts = await resPosts.json()

  const resTags = await fetch(process.env.API_URL + '/wp/v2/tags');
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

  return (
    <>
      <Head>
        <title>Impress</title>
      </Head>
      <Layout>
        <h1>{props.data.acf.header_title}</h1>
        <p>{props.data.acf.header_description}</p>
        <Tags filter={filter} setFilter={setFilter} tags={props.tags}/>
        {realizations.length > 0 &&
          <Grid realizations={realizations}/>
        }
        {realizations.length === 0 &&
          <h2>Czegoś takiego jeszcze nie mamy. <b className="underline">Spotkajmy się</b> aby o tym porozmawiać.</h2>
        }
      </Layout>
      </>
  )
}