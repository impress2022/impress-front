import classNames from "classnames";

const Square = ({ children, sizeClasses, color, custom, customWrapper }) => {
  let squareClasses = classNames({});

  squareClasses += ` fill-${color}`;
  squareClasses += " " + sizeClasses;
  squareClasses += " " + custom;

  return (
    <div className={customWrapper}>
      <svg className={sizeClasses}>
        <rect className={squareClasses} />
      </svg>
      {children}
    </div>
  );
};

export default Square;
