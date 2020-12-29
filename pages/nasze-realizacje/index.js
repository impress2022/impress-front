import Layout from "../../components/layout";
import Tags from "../../components/tags";
import { useState } from "react";
import Grid from "../../components/realizations/grid";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.API_URL + '/wp/v2/pages/7')
  const data = await res.json()

  const resPosts = await fetch(process.env.API_URL + '/wp/v2/posts?_fields=id,tags&orderby=id&order=asc');
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
      dict: dataPosts,
      notFound: false
    },
  }
}

export default function Realizations(props) {
  let realizations = props.data.acf.realizations
  const [filter, setFilter] = useState(999);

  if (filter !== 999) {
    realizations = realizations.filter((item, index) => {
        return props.dict[index].tags.includes(filter);
    })
  }

  return (
    <Layout>
      <h1>{props.data.acf.header_title}</h1>
      <p>{props.data.acf.header_description}</p>
      <Tags filter={filter} setFilter={setFilter} tags={props.tags}/>
      <Grid realizations={realizations}/>
    </Layout>
  )
}