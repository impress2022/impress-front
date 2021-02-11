import Layout from "../../components/layout";
import BasicPage from "../../components/BasicPage";
import SquareGrid from "../../components/common/squareGrid";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/133");
  const data = await res.json();

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
      notFound: false,
    },
  };
}

export default function Rodo(props) {
  const squares = <SquareGrid colors={["grey", "green", "green", "red"]} />;

  return (
    <Layout squares={squares}>
      <BasicPage content={props.data.acf.content} />
    </Layout>
  );
}
