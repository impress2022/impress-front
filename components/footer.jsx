import Arrow from "./arrow";
import Link from "next/link";
import Social from "./social";
import { useMenu } from "../hooks/useMenu";
import classNames from "classnames";
import LogoFooter from "./logoFooter";

export default function Footer() {
  const menu = useMenu();
  let pd = menu.personal_data;

  let textClasses = classNames({
    "leading-8 text-lg text-white": true,
  });

  let textHeaderClasses = classNames({
    "tracking-widest md:text-0.5 text-light-grey font-bold uppercase mb-1.5 font-aller": true,
  });

  let linksClasses = classNames({
    "text-0.75 cursor-pointer text-white leading-4.5 font-extralight font-inter text-lighter-grey": true,
  });

  let navItems = [];
  let navSecondaryItems = [];
  let footerCopy = menu.footer_copyright;

  let c = 0;
  for (const value of menu.navigation) {
    c++;
    navItems.push(
      <li
        className="mb-4 md:mb-0 md:mr-2 lg:mr-5 md:flex md:items-center"
        key={c}
      >
        <Link href={"/" + value.navigation_link[0].post_name}>
          <a className={linksClasses}>{value.navigation_label}</a>
        </Link>
      </li>
    );
  }

  c = 0;
  for (const value of menu.footer_navigation) {
    c++;
    navSecondaryItems.push(
      <li
        className="mb-4 md:mb-0 md:ml-4 lg:ml-5 md:flex md:items-center"
        key={c}
      >
        <Link href={"/" + value.footer_navigation_link[0].post_name}>
          <a className={linksClasses}>{value.footer_navigation_label}</a>
        </Link>
      </li>
    );
  }

  return (
    <footer>
      <div className="w-screen bg-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-8 md:grid-cols-12 py-36">
            <Arrow href="/kontakt" />
            <div className="md:hidden"></div>
            <div className="col-span-5 h-20 md:h-25 lg:ml-12 flex flex-col justify-center">
              <p className="text-white leading-7 text-1.375 md:text-3 md:leading-4r font-bold font-aller">
                Masz pomysł?
              </p>
              <p className="text-white leading-7 text-1.375 md:text-3 md:leading-4r font-bold font-aller">
                Porozmawiajmy
              </p>
            </div>
          </div>
          <div className="md:flex lg:mb-10">
            <div className="my-8 md:my-0 mb-10 md:mr-20 lg:mr-28">
              <Link href="/">
                <a>
                  <LogoFooter />
                </a>
              </Link>
            </div>
            <div className="mb-10 md:mr-14 lg:mr-20">
              <p className={textHeaderClasses}>Adres</p>
              <p className={textClasses}>{pd.personal_data_name}</p>
              <p className={textClasses}>{pd.personal_data_address}</p>
              <p className={textClasses}>{pd.personal_data_post}</p>
            </div>
            <div className="mb-10 md:mr-14 lg:mr-20">
              <p className={textHeaderClasses}>Telefon</p>
              <p className={textClasses}>{pd.personal_data_phone}</p>
            </div>
            <div className="mb-10">
              <p className={textHeaderClasses}>Email</p>
              <p className={textClasses}>{pd.personal_data_mail}</p>
            </div>
          </div>
          <div className="md:flex md:w-full pb-24">
            <div className="mb-10 md:mb-0 md:mr-4 lg:mr-12">
              <Social flex={true} />
            </div>
            <div className="flex flex-row justify-between md:w-full">
              <ul className="md:flex lg:min-w-387">{navItems}</ul>
              <div className="hidden md:h-full md:w-px md:block md:bg-lighter-grey md:flex md:md:items-center"></div>
              <div className="text-right flex flex-col justify-between md:flex-row lg:w-full">
                <ul className="md:flex">{navSecondaryItems}</ul>
                <p className="text-0.75 leading-4.5 mb-4 md:mb-0 text-light-grey font-inter font-extralight md:ml-4 lg:ml-auto md:flex md:items-center">
                  {footerCopy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
