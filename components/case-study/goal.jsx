import Square from "../square";

export default function Goal({ children, squareCount }) {
  return (
    <div>
      <div className="w-xs2 h-xs2">
        <Square
          sizeClasses="w-xs2 h-xs2"
          color="green"
          customWrapper="relative transform translate-x-xs1"
        >
          {squareCount >= 1 && (
            <Square
              sizeClasses="w-xs1 h-xs1"
              color="red"
              customWrapper="absolute -left-xs1 -top-xs1"
            />
          )}
          {squareCount >= 3 && (
            <Square
              sizeClasses="w-3 h-3"
              color="grey"
              customWrapper="absolute -right-3 -top-3"
            />
          )}
          {squareCount >= 2 && (
            <Square
              sizeClasses="w-3 h-3"
              color="blue"
              customWrapper="absolute -right-3 -bottom-3"
            />
          )}
        </Square>
      </div>
      <div>{children}</div>
    </div>
  );
}
