import Link from "next/link";
import classNames from "classnames";
import {useMenu} from "../hooks/useMenu";

export default function NavMenu() {
  const menu = useMenu()

  let liClasses = classNames({
    'transition duration-500 ease-linear font-en-sans text-2xl md:text-2xl lg:text-2.5 leading-250 md:leading-200 shadow-menuInset hover:shadow-menuInsetActive pb-1': true
  })

  const liItems = []
  let c = 0;
  for (const value of menu.navigation) {
    c++;
    liItems.push(
      <li className="overflow-hidden" key={c}>
        <Link href={'/' + value.navigation_link[0].post_name}>
          <a className={liClasses}>{value.navigation_label}</a>
        </Link>
      </li>
    )
  }

  return (
      <ul className="mb-24">
        {liItems}
      </ul>
    )
}