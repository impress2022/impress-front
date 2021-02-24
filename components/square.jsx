import classNames from "classnames";

const Square = ({ children, sizeClasses, color, custom, customWrapper }) => {
  let squareClasses = classNames({
      'transition ease-in': true,
  });

  squareClasses += ` fill-${color}`;
  squareClasses += sizeClasses ? " " + sizeClasses : "";
  squareClasses += custom ? " " + custom : "";

  return (
    <div className={customWrapper}>
      <svg className={sizeClasses} shapeRendering="crispEdges">
        <rect className={squareClasses} />
      </svg>
      {children}
    </div>
  );
};

export default Square;
