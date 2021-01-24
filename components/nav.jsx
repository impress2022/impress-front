import Link from "next/link";
import Hamburger from "./hamburger";
import {useEffect, useState, useRef} from "react";
import classNames from "classnames";
import Social from "./social";
import Details from "./contact/details";
import NavMenu from "./navMenu";

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuHide, setMenuHide] = useState(false);
  const scrollOffsetY = useRef(0);

  let menuClasses = classNames({
    'transition-all duration-500 ease-in-out z-20 nav-wrapper bg-white fixed h-screen top-0 w-screen pt-24 md:pt-28 lg:pt-52 flex': true,
    'left-full': !menuToggle,
    'left-7 md:left-2/4 lg:left-l58': menuToggle
  })

  let leftBarClasses = classNames({
    'transition-all duration-500 ease-in-out absolute w-7 h-screen top-6 md:top-8 bg-customGrey md:bg-grey md:opacity-50': true,
    'left-0': !menuToggle,
    '-left-7': menuToggle
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {

      function handleScroll() {
        let currentScrollPos = window.pageYOffset;
        console.log(menuHide)
        if (scrollOffsetY.current > currentScrollPos) {
          // show
          setMenuHide(false);
        } else {
          // hide
          setMenuHide(true);
        }
        scrollOffsetY.current = window.pageYOffset;
      }

      // Add event listener
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Remove event listener on cleanup
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [menuHide]); // Empty array ensures that effect is only run on mount

  return (
    <div className="sticky bg-white top-0 z-50 transition-transform ease-in h-20 lg:h-nav mx-7 md:mx-15" style={{
      transform: menuHide ? "translateY(-80px)" : "translateY(0)"
    }}>
      <nav className="flex justify-between items-center h-full">
        <div>
          <Link href="/"><a><img src="/images/Logo.svg" alt="Impress"/></a></Link>
        </div>
        <Hamburger menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <div className={menuClasses}>
          <div className={leftBarClasses}></div>
          <div className="social-media mx-8 md:mx-12 lg:mx-28">
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