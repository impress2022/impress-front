import Link from "next/link";
import Hamburger from "./hamburger";
import {useState} from "react";
import classNames from "classnames";
import Social from "./social";
import Details from "./contact/details";
import NavMenu from "./navMenu";

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  let menuClasses = classNames({
    'transition-all duration-500 ease-in-out z-20 nav-wrapper bg-white fixed h-screen top-0 w-screen pt-24 lg:pt-28 xl:pt-32 2xl:pt-20 flex': true,
    'left-full': !menuToggle,
    'left-7 md:left-2/4 xl:left-l58': menuToggle
  })

  let leftBarClasses = classNames({
    'transition-all duration-500 ease-in-out absolute w-7 h-screen top-6 md:top-8 bg-customGrey md:bg-grey md:opacity-50': true,
    'left-0': !menuToggle,
    '-left-7': menuToggle
  })

  return (
    <div className="h-20 mx-7 md:mx-15">
      <nav className="flex justify-between items-center h-full">
        <div>
          <Link href="/"><a><img src="/images/Logo.svg" alt="Impress"/></a></Link>
        </div>
        <Hamburger menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <div className={menuClasses}>
          <div className={leftBarClasses}></div>
          <div className="social-media mx-8 md:mx-12 lg:mx-24">
            <Social/>
          </div>
          <div className="navigation">
            <NavMenu/>
            <Details/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav