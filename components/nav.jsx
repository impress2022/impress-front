import Link from "next/link";
import Hamburger from "./hamburger";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import Social from "./social";
import Details from "./kontakt/details";
import NavMenu from "./navMenu";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

function Nav({ menu }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuHide, setMenuHide] = useState(false);
  const scrollOffsetY = useRef(0);

  const windowSize = useWindowSize();

  let menuClasses = classNames({
    "art-transition z-50 nav-wrapper bg-white fixed top-0 bottom-0 w-screen pt-24 md:pt-28 lg:pt-36 flex overflow-y-scroll md:overflow-y-visible": true,
    "left-full": !menuToggle,
    // "transform translate-x-full": !menuToggle,
    "md:left-2/4 lg:left-l58": menuToggle && windowSize.width >= 768,
    "left-0": menuToggle && windowSize.width < 768,
  });

  let leftBarClasses = classNames({
    "transition-all duration-500 ease-in-out absolute w-7 z-50 top-0 h-screen bg-customGrey md:bg-grey md:opacity-50": true,
    "left-0": !menuToggle,
    "-left-7": menuToggle,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      function handleScroll() {
        let currentScrollPos = window.pageYOffset;

        if (scrollOffsetY.current > currentScrollPos) {
          // show
          setMenuHide(false);
        } else {
          // hide
          setMenuHide(true);
        }
        scrollOffsetY.current = window.pageYOffset;
      }

      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.paddingRight = "0";

      // Add event listener
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Remove event listener on cleanup
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [menuHide]); // Empty array ensures that effect is only run on mount

  return (
    <>
      <div className={menuClasses} style={{ height: '100vh' }}>
        <Hamburger
          menuToggle={menuToggle}
          setMenuToggle={setMenuToggle}
          custom="fixed right-6 top-26px md:right-3.75 lg:right-15 lg:top-9 z-60"
          active={!menuToggle}
        />
        <div className={leftBarClasses} />
        <div className="social-media mx-8 md:mx-12 lg:mx-28">
          <Social menu={menu} />
        </div>
        <div className="navigation flex flex-col justify-between">
          <NavMenu menu={menu} />
          <Details menu={menu} />
        </div>
      </div>
      <div
        className="sticky bg-white top-0 z-40 art-transition h-20 lg:h-nav px-7 md:px-15"
        style={{
          transform: menuHide ? "translateY(-100px)" : "translateY(0)",
        }}
      >
        <nav className="h-full relative">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <a>
                <Image
                  src="/images/Logo.svg"
                  alt="Impress"
                  width={146}
                  height={30}
                />
              </a>
            </Link>
            <Hamburger
              menuToggle={menuToggle}
              setMenuToggle={setMenuToggle}
              active={menuToggle}
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
