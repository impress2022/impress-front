import Link from "next/link";
import classNames from "classnames";
import {useMenu} from "../hooks/useMenu";

export default function NavMenu() {
  const menu = useMenu()

  let liClasses = classNames({
    'font-secondary text-2xl md:text-2xl xl:text-2.5xl leading-250 md:leading-200 hover:shadow-menuInset pb-1': true
  })

  const liItems = []
  let c = 0;
  for (const value of menu.navigation) {
    c++;
    liItems.push(
      <li key={c}>
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