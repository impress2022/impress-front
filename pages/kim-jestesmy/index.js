import Layout from "../../components/layout";
import SubpageHero from "../../components/common/SubpageHero";
import SubpageHeroDesc from "../../components/common/SubpageHeroDesc";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/11");
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

export default function About(props) {
  const page = props.data.acf;

  const Hero = (
    <SubpageHero
      data={{
        title: page.subpage_title,
        subtitle: page.subpage_subtitle,
        photo: page.subpage_main_image,
        lesser_photo: page.subpage_lesser_image,
      }}
    />
  );
  const HeroDesc = (
    <SubpageHeroDesc
      data={{
        desc: page.subpage_lesser_desc,
        b_desc: page.subpage_bigger_desc,
        photo: page.subpage_lesser_image,
      }}
    />
  );

  return (
    <Layout titleSection={Hero} fluidPhoto={HeroDesc}>
      <h1>kim jestesmy</h1>
    </Layout>
  );
}
