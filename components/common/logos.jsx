import { useMenu } from "../../hooks/useMenu";
import Image from "next/image";

export default function Logos(props) {
  const menu = useMenu();

  let logos = [];
  let c = 0;
  for (const el of menu.logos) {
    c++;
    logos.push(<Image key={c} src={el.logo.url} width={83} height={83} />);
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10 md:gap-x-28 md:gap-y-20 lg:gap-y-36 md:px-4.5 lg:px-12.5 md:grid-cols-4">
        {logos}
      </div>
    </>
  );
}
