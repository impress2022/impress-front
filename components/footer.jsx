import Arrow from "./arrow";
import Link from "next/link";
import Social from "./social";
import {useMenu} from "../hooks/useMenu";
import classNames from "classnames";

export default function Footer() {
  const menu = useMenu()

  let pd = menu.personal_data

  let textClasses = classNames({
    'leading-8 text-lg text-white': true,
  })

  let textHeaderClasses = classNames({
    'tracking-widest text-light-grey font-bold uppercase mb-1.5': true,
  })

  let linksClasses = classNames({
    'cursor-pointer text-white leading-4.5 mb-4': true,
  })

  let navItems = []
  let navSecondaryItems = []
  let footerCopy = menu.footer_copyright

  let c = 0;
  for (const value of menu.navigation) {
    c++;
    navItems.push(
      <li key={c}>
        <Link href={'/' + value.navigation_link[0].post_name}>
          <a className={linksClasses}>{value.navigation_label}</a>
        </Link>
      </li>
    )
  }

  c = 0;
  for (const value of menu.footer_navigation) {
    c++;
    navSecondaryItems.push(
      <li key={c}>
        <Link href={'/' + value.footer_navigation_link[0].post_name}>
          <a className={linksClasses}>{value.footer_navigation_label}</a>
        </Link>
      </li>
    )
  }
  console.log(menu)

  return (
    <>
      <div className="w-screen bg-grey">
         <div className="container mx-auto">
           <div className="grid grid-cols-8 py-5.25">
             <Arrow href="/kontakt"/>
             <div></div>
             <div className="col-span-5 h-20 md:h-25 flex flex-col justify-center">
               <p className="text-white leading-7 text-1.375 font-bold">Masz pomysł?</p>
               <p className="text-white leading-7 text-1.375 font-bold">Porozmawiajmy</p>
             </div>
           </div>
           <div>
             <div className="my-8 mb-10">
               <Link href="/"><a><img src="/images/logo-white.svg" alt="Impress"/></a></Link>
             </div>
             <div className="mb-10">
                <p className={textHeaderClasses}>Adres</p>
                <p className={textClasses}>{pd.personal_data_name}</p>
                <p className={textClasses}>{pd.personal_data_address}</p>
                <p className={textClasses}>{pd.personal_data_post}</p>
             </div>
             <div className="mb-10">
                <p className={textHeaderClasses}>Telefon</p>
                <p className={textClasses}>{pd.personal_data_phone}</p>
             </div>
             <div className="mb-10">
                <p className={textHeaderClasses}>Zapytania</p>
                <p className={textClasses}>{pd.personal_data_mail}</p>
             </div>
           </div>
           <div>
             <div className="mb-10">
               <Social flex={true}/>
             </div>
             {/*nawigacja*/}
             <div>
              <ul>
                {navItems}
              </ul>
              <ul>{navSecondaryItems}</ul>
              <p>{footerCopy}</p>
             </div>
           </div>
         </div>
      </div>
    </>
  )
}