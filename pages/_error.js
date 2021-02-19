import Head from "next/head";
import Text from "../components/typography/text";
import Link from "next/link";

export default function Custom404({ menu }) {
  return (
    <>
      <Head>
        <title>500 Błąd strony - Impress</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Błąd strony."
        />
      </Head>

      <section className="mb-500 py-7.25 flex flex-col justify-center items-center">
        <Text size="h1">500</Text>
        <Text size="h3" custom="text-center">
          Błąd strony. Zgłoś sytuację administratorowi.
        </Text>
        <Text size="h3" custom="text-center">
          <Link href="/">
            <a className="text-green hover:text-dark-green cursor-pointer">
              Strona główna
            </a>
          </Link>
        </Text>
      </section>
    </>
  );
}
