import Head from "next/head";
import Text from "../components/typography/text";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Nie znaleziono strony - Impress</title>
        <meta
          name="Description"
          content="ImpressPR - agencja marketingowa. Nie znaleziono strony. Author: Kamil Serafin"
        />
      </Head>

      <section className="mb-500 py-7.25 flex flex-col justify-center items-center">
        <Text size="h1">404</Text>
        <Text size="h3" custom="text-center">
          Nie znaleziono strony o podanym adresie.
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
