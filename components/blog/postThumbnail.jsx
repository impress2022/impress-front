import Image from "next/image";
import Link from "next/link";
import Text from "../typography/text";

export default function PostThumbnail({ image }) {
  const d = new Date(image.date);
  const ye = new Intl.DateTimeFormat("pl", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("pl", { month: "long" }).format(d);
  mo = mo.charAt(0).toUpperCase() + mo.slice(1);
  const da = new Intl.DateTimeFormat("pl", { day: "2-digit" }).format(d);

  return (
    <article className="group cursor-pointer my-12 lg:my-0">
      <Link href={"/post/" + image.slug}>
        <a>
          <div className="relative block-important transition duration-200 ease-linear shadow-caseInsetMobile lg:shadow-caseInset group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive group-hover:-translate-y-2.5 h-400 md:col-span-8">
            <Image
              src={image.acf.main_image.sizes["1536x1536"]}
              layout="fill"
              objectFit="cover"
              alt={image.acf.main_image.alt}
            />
          </div>
          <div className="md:col-span-5">
            <Text size="h3" custom="mt-10">
              {image.title.rendered}
            </Text>
            <Text
              size="p"
              custom="text-0.75 font-bold font-aller opacity-30 mt-4"
            >
              {`${da} ${mo} ${ye}`}
            </Text>
          </div>
        </a>
      </Link>
    </article>
  );
}
