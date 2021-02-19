import Thumbnail from "./thumbnail";
import classNames from "classnames";

export default function Grid(props) {
  const thumbnails = [];

  props.realizations.forEach((value, index) => {
    thumbnails.push(<Thumbnail key={index} realization={value} />);
  });

  if (props.realizations.length % 3 === 2) {
    thumbnails.push(
      <div
        key={props.realizations.length}
        className="hidden lg:block lg:w-400 realization-thumbnail lg:max-h-480 mb-12 md:mb-0 lg:mb-14"
      />
    );
  }

  let thumbnailClassess = classNames({
    "realizations-wrapper h-full md:flex md:flex-row md:flex-wrap md:justify-between": true,
  });

  return (
    <>
      <div className={thumbnailClassess}>{thumbnails}</div>
    </>
  );
}
