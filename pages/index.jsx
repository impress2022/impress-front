import Layout from "../components/layout";
import HomeHero from "../components/lottie/homeHero";
import Text from "../components/typography/text";
import Logos from "../components/common/logos";
import ThinArrow from "../components/common/thinArrow";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/pages/69')
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

export default function Home(props) {
  let content = props.data.acf;

  return (
    <Layout>
      <section className="md:relative mt-20 md:mt-12 lg:mt-0 mb-12 md:mb-s-mar leading-0.875 md:grid md:grid-cols-12">
        <div className="mb-10 md:col-span-5 md:mt-16 lg:mt-s-mar">
          <Text size="body-12" custom="font-bold uppercase tracking-widest mb-0.625 lg:mb-5 text-center md:text-left">{content.first_section_slogan}</Text>
          <Text size="h1" custom="mb-5 text-center md:text-left px-8 md:px-0 md:pr-8 lg:pr-16 lg:text-4.375 lg:leading-5 lg:tracking-hero">{content.first_section_header}</Text>
          <Text size="body-18" custom="text-center md:text-left md:pr-12 lg:pr-16 lg:text-1.5 lg:leading-2.625 lg:tracking-desc">{content.first_section_description}</Text>
        </div>
        <HomeHero custom="w-44 h-44 md:col-span-5"/>
        <a href="#realizacje">
          <ThinArrow custom="hidden md:block md:absolute md:-bottom-6r lg:bottom-0 md:left-0"/>
        </a>
      </section>
      <section className="md:mb-s-mar">
        <div className="my-20 container mx-auto">
          <Logos/>
        </div>
      </section>
      <section id="realizacje">

      </section>
      {/*<Number direction="bottom-right">1</Number>*/}
    </Layout>
  )
}
