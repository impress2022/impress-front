import Square from "../square";
import Link from "next/link";
import Text from "../typography/text";

export default function SingleSquare({ children }) {
  return (
    <div className="md:mb-7.5r flex justify-items-start">
      <Link href="/nasze-realizacje">
        <a className="hover:shadow-buttonBg transition duration-200 ease-linear">
          <Square
            sizeClasses="w-x6 h-x6 md:w-x4 md:h-x4 lg:w-x7 lg:h-x7"
            color="green"
            customWrapper="relative"
          >
            <div className="cursor-pointer">
              <Text
                size="h3"
                custom="absolute left-10 md:left-24 lg:left-7.5 top-10 md:top-16 lg:top-7.5 z-10 min-w-60vw"
              >
                {children}
              </Text>
              <svg
                className="absolute left-10 md:left-28 top-40 md:top-initial md:bottom-8 lg:bottom-28 z-10 animate-bounce-slow-diag"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.67752 1.31135e-07H33.6775V4H5.67752V1.31135e-07Z"
                  fill="#202222"
                />
                <path
                  d="M29.6775 28L29.6775 0L33.6775 1.31135e-07V28H29.6775Z"
                  fill="#202222"
                />
                <path
                  d="M28.87 1.97924L31.6984 4.80767L3.41412 33.0919L0.585693 30.2635L28.87 1.97924Z"
                  fill="#202222"
                />
              </svg>
            </div>
          </Square>
        </a>
      </Link>
    </div>
  );
}
