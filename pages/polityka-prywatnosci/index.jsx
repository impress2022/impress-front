import Layout from "../../components/layout";
import BasicPage from "../../components/BasicPage";
import SquareGrid from "../../components/common/squareGrid";
import Head from "next/head";

export async function getStaticProps(context) {
  const headers = context.preview ?
    { headers: { 'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`} } : {}

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/135", headers);
  const data = await res.json();

  const resMenu = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/105", headers
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
        <title>Polityka prywatności | ImPress PR & Marketing</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Polityka prywatności."
        />
        <meta property="og:title" content="ImPress PR & Marketing | Polityka prywatności" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_FRONT_URL + "images/logo-thumb.jpg"} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL + "polityka-prywatnosci"} />
      </Head>
      <Layout squares={squares} menu={props.menu}>
        <BasicPage content={props.data.acf.content} files={props.data.acf.files}/>
      </Layout>
    </>
  );
}
