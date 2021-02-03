import classNames from "classnames";
import useWindowSize from "../hooks/useWindowSize";

export default function Hamburger(props) {
  let hamburgerClasses1 = classNames({
    "transition duration-150 ease-in-out": true,
    "transform translate-y-o1 translate-x-0.5 rotate-45": props.menuToggle,
  });
  let hamburgerClasses2 = classNames({
    "transition duration-150 ease-in-out": true,
    hidden: props.menuToggle,
  });
  let hamburgerClasses3 = classNames({
    "transition duration-150 ease-in-out": true,
    "transform translate-x-0.5 origin-bottom-left -rotate-45": props.menuToggle,
  });

  let buttonClasses = classNames({
    "flex justify-center items-center focus:outline-none": true,
    "transition duration-100 ease-linear hidden": props.active,
  });

  buttonClasses += " " + props.custom;

  const windowSize = useWindowSize();

  return (
    <>
      <button
        className={buttonClasses}
        onClick={() => {
          props.setMenuToggle(!props.menuToggle);
          if (!props.menuToggle) {
            // document.querySelector("body").style.overflowY = "hidden";
            // if (windowSize.width >= 1280) {
            //   document.querySelector("body").style.paddingRight = "18px";
            // }
          } else {
            // document.querySelector("body").style.overflowY = "scroll";
            // if (windowSize.width >= 1280) {
            //   document.querySelector("body").style.paddingRight = "0px";
            // }
          }
        }}
      >
        <b className="hidden md:block md:mr-8 uppercase text-primary">Menu</b>
        <svg
          width="32"
          height="28"
          viewBox="0 0 28 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="28"
            height="3"
            className={hamburgerClasses1}
            fill="#343434"
          />
          <rect
            y="10"
            width="28"
            height="3"
            className={hamburgerClasses2}
            fill="#343434"
          />
          <rect
            y="20"
            width="28"
            height="3"
            className={hamburgerClasses3}
            fill="#343434"
          />
        </svg>
      </button>
    </>
  );
}
