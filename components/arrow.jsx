export default function Arrow(props) {
  return (
    <div className="relative col-span-2 md:w-25 md:h-25">
      <a href={props.link} className="absolute flex items-center justify-center top-0 left-0 w-20 h-20 md:w-25 md:h-25 bg-red z-10 transform hover:translate-x-4 hover:-translate-y-4 transition duration-150 ease-out">
        <div>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.67752 1.31135e-07H33.6775V4H5.67752V1.31135e-07Z" fill="white"/>
            <path d="M29.6775 28L29.6775 0L33.6775 1.31135e-07V28H29.6775Z" fill="white"/>
            <path d="M28.87 1.97924L31.6984 4.80767L3.41412 33.0919L0.585693 30.2635L28.87 1.97924Z" fill="white"/>
          </svg>
        </div>
      </a>
      <div className="absolute z-0 top-0 left-0 bg-grey-hover-btn w-full h-full"></div>
    </div>
  )
}