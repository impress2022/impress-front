import {useMenu} from "../../hooks/useMenu";
import Image from 'next/image'

export default function Logos(props) {
  const menu = useMenu();
  console.log(menu)

  let logos = []
  let c = 0;
  for(const el of menu.logos) {
    c++
    logos.push(<Image key={c} src={el.logo.url} width={83} height={83}/>)
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-x-12 gap-y-12">
        {logos}
      </div>
    </>
  )
}