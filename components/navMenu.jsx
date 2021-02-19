import Link from "next/link";
import classNames from "classnames";

export default function NavMenu({ menu }) {
  let liClasses = classNames({
    "transition duration-500 ease-linear font-en-sans text-2xl md:text-2xl lg:text-2.5 leading-250 md:leading-200 shadow-menuInset hover:shadow-menuInsetActive pb-1": true,
  });

  const liItems = [];
  let c = 0;
  for (const value of menu.navigation) {
    c++;
    liItems.push(
      <li itemProp="name" className="overflow-hidden" key={c}>
        <Link href={"/" + value.navigation_link[0].post_name}>
          <a itemProp="url" className={liClasses}>
            {value.navigation_label}
          </a>
        </Link>
      </li>
    );
  }

  return (
    <ul
      itemScope
      role="navigation"
      itemType="http://www.schema.org/SiteNavigationElement"
      className="mb-4 md:mb-8 lg:mb-12"
    >
      {liItems}
    </ul>
  );
}
