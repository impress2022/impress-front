import { useMemo } from "react";
import classNames from "classnames";

export default function Text(props) {
  let tagClasses = classNames({
    "text-0.75 leading-4.5 font-aller": props.size === "body-12",
    "text-1 leading-6 font-normal font-en-sans": props.size === "body-16",
    "text-1 leading-6 font-bold font-aller": props.size === "body-bold-16",
    "text-1.125 leading-8 font-normal font-en-sans": props.size === "body-18",
    "text-1.125 leading-8 font-bold font-aller": props.size === "body-bold-18",
    "text-1.5 leading-8 font-normal font-en-sans": props.size === "body-large",
    "text-1.25 leading-2.125 font-bold font-aller":
      props.size === "body-bold-large",
    "text-1.75 leading-3r font-bold font-aller": props.size === "body-xl",
    "text-170 opacity-40 font-bold font-aller": props.size === "h4",
    "text-1.375 md:text-1.625 leading-7 font-bold md:leading-2.125 font-aller":
      props.size === "h3",
    "text-2.25 md:text-2.875 leading-3r font-light md:leading-4r font-aller":
      props.size === "h2",
    "text-2.5 md:text-3 leading-4r font-bold font-aller": props.size === "h1",
    "text-grey": props.color !== "white",
    "text-white": props.color === "white",
  });

  if (props.custom) {
    tagClasses += " " + props.custom;
  }

  const CustomTag = useMemo(
    () => (props.size.charAt(0) === "h" ? props.size : "p"),
    [props.size]
  );

  return <CustomTag className={tagClasses}>{props.children}</CustomTag>;
}
