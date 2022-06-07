import Text from "./typography/text";
import Image from "next/image";

export default function BasicPage({ content, files }) {
  return (
      <>
        <div className="wysiwyg md:grid md:grid-cols-12 mt-24 mb-500">
          <div className="md:col-span-2" />
          <div
            className="md:col-span-8"
          >
              <div dangerouslySetInnerHTML={{ __html: content }}/>
              { files &&
              <div>
                      <Text size="body-xl">Pliki do pobrania</Text>
                      { files.map((item,index) => (
                          <a key={index} href={item.file.url} download className="group flex items-center my-16 md:my-4" style={{ height: '64px' }}>
                              <Image src={item.icon.url} width={64} height={64} alt={item.icon.alt}/>
                              <p className="group-hover:text-green art-transition text-1 leading-6 font-normal font-en-sans" style={{ marginBottom: 0 }}>{item.file.title}</p>
                          </a>
                      )) }
              </div>
              }
          </div>
          <div className="md:col-span-2" />
        </div>
      </>
  );
}
