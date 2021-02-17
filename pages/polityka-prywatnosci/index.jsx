import Layout from "../../components/layout";
import BasicPage from "../../components/BasicPage";
import SquareGrid from "../../components/common/squareGrid";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/135");
  const data = await res.json();

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
      menu: menu.acf,
      notFound: false,
    },
  };
}

export default function Privacy(props) {
  const squares = <SquareGrid colors={["grey", "green", "green", "red"]} />;

  return (
    <>
      <Head>
        <title>Polityka prywatności - Impress</title>
      </Head>
      <Layout squares={squares} menu={props.menu}>
        <BasicPage content={props.data.acf.content} />
      </Layout>
    </>
  );
}
