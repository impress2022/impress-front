import Image from "next/image";
import Link from "next/link";
import Text from "../typography/text";
import {format} from "date-fns";
import pl from "date-fns/locale/pl";

export default function PostThumbnail({ image }) {
  const parseDate = (input, format) => {
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g),
      i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
  }

  const dat = parseDate(image.date);
  const d = format(dat, 'dd MMMM yyyy', { locale: pl, });

  return (
      <article className="group cursor-pointer my-12 lg:my-0">
        <Link href={"/post/" + image.slug}>
          <a>
            <div className="relative block-important art-transition shadow-caseInsetMobile lg:shadow-caseInset group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive group-hover:-translate-y-2.5 h-400 md:col-span-8">
              <Image
                src={image.acf.main_image.sizes["1536x1536"]}
                layout="fill"
                objectFit="cover"
                alt={image.acf.main_image.alt}
              />
            </div>
            <div className="md:col-span-5">
              <Text
                size="p"
                custom="text-0.75 font-bold font-aller opacity-30 mt-7"
              >
                {d}
              </Text>
              <Text size="h3" custom="mt-5">
                {image.title.rendered}
              </Text>
            </div>
          </a>
        </Link>
      </article>
  );
}
