import classNames from "classnames";

export default function SliderArrow({
  direction,
  active,
  handleClick,
  currentIndex,
  maxElements,
}) {
  let buttonClassess = classNames({
    "flex justify-center items-center w-16 h-16 focus:outline-none transition-color duration-200 ease-linear": true,
    "bg-red hover:bg-red-hover": active,
    "bg-white": !active,
    "transform rotate-180": direction === "left",
  });

  return (
    <button
      className={buttonClassess}
      onClick={() => {
        if (direction === "left" && currentIndex !== 0) {
          handleClick(-1);
        }

        if (!direction && currentIndex !== maxElements - 1) {
          handleClick(1);
        }
      }}
    >
      <svg
        width="29"
        height="26"
        viewBox="0 0 29 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Vector">
          <path
            d="M16.0362 0.154297L28.5096 12.6277L26.7277 14.4096L14.2543 1.93621L16.0362 0.154297Z"
            fill={active ? "white" : "black"}
          />
          <path
            d="M14.2543 23.3192L26.7277 10.8458L28.5096 12.6277L16.0362 25.1011L14.2543 23.3192Z"
            fill={active ? "white" : "black"}
          />
          <path
            d="M25.4863 11.3678V13.8878L0.286133 13.8878L0.286133 11.3678L25.4863 11.3678Z"
            fill={active ? "white" : "black"}
          />
        </g>
      </svg>
    </button>
  );
}
