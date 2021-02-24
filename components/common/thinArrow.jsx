import React from "react";

export default function ThinArrow({ custom }) {
  return (
    <div className={custom}>
      <a href="#realizacje">
        <svg
          width="24"
          height="93"
          viewBox="0 0 24 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <path
            d="M10.9393 92.0607C11.5251 92.6464 12.4749 92.6464 13.0607 92.0607L22.6066 82.5147C23.1924 81.9289 23.1924 80.9792 22.6066 80.3934C22.0208 79.8076 21.0711 79.8076 20.4853 80.3934L12 88.8787L3.51472 80.3934C2.92894 79.8076 1.97919 79.8076 1.3934 80.3934C0.807615 80.9792 0.807615 81.9289 1.3934 82.5147L10.9393 92.0607ZM10.5 6.55671e-08L10.5 91L13.5 91L13.5 -6.55671e-08L10.5 6.55671e-08Z"
            fill="#202222"
          />
        </svg>
      </a>
    </div>
  );
}
