import Square from "../square";
import React from "react";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";

export default function SquareGrid({ children, colors, href }) {
  return (
    <div className="absolute square-wrapper-footer -top-15 md:-top-219 lg:-top-345 left-0 right-0 mx-7 md:mx-16 lg:mx-7.5r md:flex md:items-end md:justify-between">
      <div className="md:flex md:items-end">
        <Slide bottom>
          <Square
            sizeClasses="md:w-x3 md:h-x3 lg:w-x5 lg:h-x5"
            color={colors[0]}
            customWrapper="shadow-1px-grey hidden md:block md:relative md:bottom-0 md:left-0 square-footer-1"
          />
        </Slide>
        <a
          href={href}
          className="hover:shadow-buttonBg art-transition z-10"
        >
          <Square
            sizeClasses="w-x6 h-x6 md:w-x4 md:h-x4 lg:w-x7 lg:h-x7"
            color={colors[1]}
            customWrapper="absolute md:relative md:bottom-0 md:left-0 square-footer-2"
          >
            {children}
          </Square>
        </a>
      </div>
      <div className="md:flex md:items-end">
        <Slide top>
          <Square
            sizeClasses="md:w-x1 md:h-x1 lg:w-x2 lg:h-x2"
            color={colors[2]}
            customWrapper="hidden md:block transform md:translate-y-full square-footer-3"
          />
        </Slide>
        <Rotate top right>
          <Square
            sizeClasses="md:w-x3 md:h-x3 lg:w-x5 lg:h-x5"
            color={colors[3]}
            customWrapper="hidden md:block h-full square-footer-4"
          />
        </Rotate>
      </div>
    </div>
  );
}
