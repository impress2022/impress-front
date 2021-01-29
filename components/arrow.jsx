import Link from "next/link";

export default function Arrow(props) {
  return (
    <div className="relative col-span-2 lg:col-span-1 md:w-25 md:h-25 cursor-pointer">
      <Link href={props.link}>
        <a className="absolute flex items-center justify-center top-0 left-0 w-20 h-20 md:w-25 md:h-25 bg-red z-10 transform hover:shadow-buttonBg transition duration-150 ease-out">
          <div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.67752 1.31135e-07H33.6775V4H5.67752V1.31135e-07Z"
                fill="white"
              />
              <path
                d="M29.6775 28L29.6775 0L33.6775 1.31135e-07V28H29.6775Z"
                fill="white"
              />
              <path
                d="M28.87 1.97924L31.6984 4.80767L3.41412 33.0919L0.585693 30.2635L28.87 1.97924Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </Link>
    </div>
  );
}
