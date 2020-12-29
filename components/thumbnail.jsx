import Image from 'next/image'
import Link from "next/link";

export default function Thumbnail(props) {
  const photo = props.realization.acf.teaser_photo
  console.log(props.realization)
  return (
    <>
      <Link href={'/realizacja/' + props.realization.post_name}>
        {/*<div className="absolute -left-4 -bottom-4 bg-grey-bg w-full h-full"></div>*/}
        <div>
          <Image src={photo.url} alt={photo.alt} width={400} height={400}/>
          <strong>{props.realization.post_title}</strong>
        </div>
      </Link>
    </>
  )
}