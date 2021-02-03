import classNames from "classnames";

export default function SubpagesLottie({ lottie, custom, innerCustom }) {
  let lottieClasses = classNames({
    "flex justify-center items-center": true,
    "bg-grey-hover": lottie === "design",
    "bg-red": lottie === "marketing",
    "bg-dark-green": lottie === "pr",
    "bg-blue": lottie === "social",
  });

  if (custom) {
    lottieClasses += " " + custom;
  }

  return (
    <div className={lottieClasses}>
      {lottie === "pr" && (
        <svg
          className={innerCustom}
          width="59"
          height="56"
          viewBox="0 0 59 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 36.5555 44.667)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 47.6667 44.667)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 25.4443 44.667)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 36.5555 22.4453)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 58.7777 22.4453)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 58.7777 33.5557)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 25.4443 33.5557)"
            fill="#DCE823"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-0.953433 0.301607 0.301606 0.953433 11.0379 23)"
            fill="#EAF803"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 58.7777 11.334)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 14.3334 44.667)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 47.6667 11.334)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 58.7777 0.222656)"
            fill="#C7D300"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 58.7777 44.667)"
            fill="#C7D300"
          />
        </svg>
      )}
      {lottie === "social" && (
        <svg
          className={innerCustom}
          width="56"
          height="74"
          viewBox="0 0 56 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44.6296"
            height="22.2222"
            transform="matrix(-1 0 0 1 44.6666 0.293945)"
            fill="#2B67A4"
          />
          <rect
            width="44.6296"
            height="22.2222"
            transform="matrix(-1 0 0 1 55.9629 40.5557)"
            fill="#529AE2"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 44.6666 22.5166)"
            fill="#2B67A4"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 22.4445 62.7773)"
            fill="#529AE2"
          />
        </svg>
      )}
      {lottie === "marketing" && (
        <svg
          className={innerCustom}
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5558 44.667)"
            fill="#E9316F"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5558 22.4453)"
            fill="#F06291"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 55.778 22.4453)"
            fill="#E9316F"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 11.3334 22.4453)"
            fill="#E9316F"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 11.3334 0.222656)"
            fill="#B52052"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5558 0.222656)"
            fill="#B52052"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 11.3334 44.667)"
            fill="#B52052"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5558 0.222656)"
            fill="#E9316F"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 55.778 0.222656)"
            fill="#B52052"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 55.778 44.667)"
            fill="#B52052"
          />
        </svg>
      )}
      {lottie === "design" && (
        <svg
          className={innerCustom}
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5131 33.5127)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 11.2908 0.179688)"
            fill="#4B4B4B"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 55.7351 0.179688)"
            fill="#4B4B4B"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5131 22.4023)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5131 44.624)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 22.402 44.624)"
            fill="#202222"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 44.6243 44.624)"
            fill="#202222"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 11.2909 11.291)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 22.402 0.179688)"
            fill="#202222"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5131 0.179688)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 33.5131 11.291)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 55.7351 11.291)"
            fill="#262828"
          />
          <rect
            width="11.1111"
            height="11.1111"
            transform="matrix(-1 0 0 1 44.6243 0.179688)"
            fill="#202222"
          />
        </svg>
      )}
    </div>
  );
}
