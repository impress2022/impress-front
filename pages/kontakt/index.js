import Layout from "../../components/layout";
import Text from "../../components/typography/text";
import Input from "../../components/common/input";
import Select from "../../components/common/select";
import React, { useState } from "react";
import Square from "../../components/square";
import Flip from "react-reveal/Flip";
import { useRouter } from "next/router";
import Modal from "../../components/common/modal";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/wp/v2/pages/13");
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

export default function Contact(props) {
  const page = props.data.acf;

  const router = useRouter();
  const { thanks } = router.query;
  console.log(page);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Head>
        <title>Skontaktuj się - Impress</title>
      </Head>
      <Layout overflow={true}>
        {thanks && thanks === "true" && (
          <Modal
            header={page.thanks.header}
            content={page.thanks.content}
            signature={page.thanks.signature}
          />
        )}
        <div className="relative">
          <div>
            <Text size="h2" custom="my-12 lg:max-w-690">
              {page.header_title}
            </Text>
            <Flip left>
              <div className="absolute right-0 top-0 contact-square-wrapper">
                <Square color="red" sizeClasses="lg:w-x5 lg:h-x5">
                  <Square
                    color="green"
                    sizeClasses="lg:w-x2 lg:h-x2"
                    customWrapper="absolute right-0 transform translate-x-full"
                  >
                    <Square
                      color="grey"
                      sizeClasses="lg:w-xs2 lg:h-xs2"
                      customWrapper="absolute transform -translate-x-full"
                    />
                  </Square>
                </Square>
              </div>
            </Flip>
          </div>
          <form
            action="https://submit-form.com/ElqDWYil"
            className="contact-form"
            autoComplete="off"
          >
            <input
              type="hidden"
              name="_email.subject"
              value="Formularz kontaktowy - Impress"
            />
            <input
              type="hidden"
              name="_redirect"
              value={process.env.NEXT_PUBLIC_FORM_RETURN_URL}
            />
            <input type="hidden" name="_append" value="false" />
            <div>
              {page.vertical_fields.map((item, index) => (
                <div key={index} className="form-group">
                  <Input
                    label={item.label}
                    arr={{
                      id: item.name,
                      name: item.name,
                      placeholder: item.placeholder,
                      required: "required",
                    }}
                    custom="md:ml-2"
                  />
                </div>
              ))}

              {page.select_fields.map((item, index) => (
                <div className="form-group" key={index}>
                  <Text
                    size="p"
                    custom="text-1.75 leading-2.875 font-encode-sans md:mb-6"
                  >
                    {item.label}
                  </Text>
                  <Select options={item.options} name={item.label} />
                </div>
              ))}

              <div className="form-group">
                <Text
                  size="p"
                  custom="text-1.75 leading-2.875 font-encode-sans mb-6"
                >
                  {page.horizontal_fields.label}
                </Text>
                {page.horizontal_fields.horizontal_field.map((item, index) => (
                  <Input
                    key={index}
                    arr={{
                      id: item.name,
                      name: item.name,
                      placeholder: item.placeholder,
                      required: "required",
                      type: item.type,
                    }}
                  />
                ))}
              </div>
              <div className="form-group my-12 overflow-hidden">
                <input
                  className="styled-checkbox"
                  id="styled-checkbox-2"
                  type="checkbox"
                  value={checked}
                  required="required"
                />
                <label
                  htmlFor="styled-checkbox-2"
                  className="text-0.75 leading-4.5 font-aller font-bold"
                  onClick={() => {
                    setChecked(!checked);
                  }}
                >
                  <p className="max-w-670 inline md:block">
                    {page.acceptation}
                  </p>
                </label>
              </div>
              <div className="form-group text-center md:text-left my-16">
                <button
                  type="submit"
                  className="bg-green hover:bg-green-hover transition-colors duration-200 ease-linear px-16 py-3 font-bold font-aller text-1.125 leading-8 focus:outline-none"
                >
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
