import Layout from "../../components/layout";

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/wp/v2/posts?slug=${slug}`)
  const data = await res.json()

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
      notFound: false
    },
  }
}

const Post = (props) => {
  console.log(props.data)

  return (
    <Layout>
      <h1>{props.data[0].acf.header_title}</h1>
    </Layout>
  )
}

export default Post;