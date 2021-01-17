import Image from 'next/image'
import Link from "next/link";
import Text from "../typography/text";

export default function Thumbnail(props) {
  const photo = props.realization.acf.teaser.teaser_photo
  const href = props.realization.slug ? '/realizacja/' + props.realization.slug : ''

  return (
    <div className="realization-thumbnail lg:max-h-480 mb-12 md:mb-0 lg:mb-14">
      <Link href={href}>
        <div className="group md:flex md:flex-col lg:block cursor-pointer">
          <div className="shadow-caseInsetMobile lg:shadow-caseInset group-hover:shadow-caseInsetActiveMobile lg:group-hover:shadow-caseInsetActive transform group-hover:translate-x-2.5 group-hover:-translate-y-2.5 w-320 h-320 md:w-405 md:h-405 lg:w-400 lg:h-400 transition duration-300 ease-linear">
            <Image src={photo.url} alt={photo.alt} width={420} height={420}/>
          </div>
          <Text size="h3" custom="mt-5 group-hover:mt-5">{props.realization.title.rendered}</Text>
        </div>
      </Link>
    </div>
  )
}