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
      <div style={{ gridAutoRows: '1fr' }} className="grid grid-cols-3 gap-x-12 gap-y-16 md:gap-x-16 md:gap-y-20 lg:gap-x-36 lg:gap-y-36 md:px-16 lg:px-7.5r md:grid-cols-4 items-center">
        {logos}
      </div>
    </>
  );
}
