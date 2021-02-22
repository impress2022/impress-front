import React from "react";
import Slide from "react-reveal/Slide";

export default function Logos(props) {
  const menu = props.menu;

  let logos = [];
  let c = 0;
  for (const el of menu.logos) {
    c++;
    logos.push(
      <Slide bottom key={c}>
        <img src={el.logo.url} alt={el.logo.alt} className="w-full h-auto" />
      </Slide>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10 md:gap-x-28 md:gap-y-20 lg:gap-y-36 md:px-4.5 lg:px-12.5 md:grid-cols-4 items-center">
        {logos}
      </div>
    </>
  );
}
