import Square from "../square";
import Text from "../typography/text";
import classNames from "classnames";

export default function Number({ children, direction }) {
  let squareClasses = classNames({
    absolute: true,
    "-top-1.375 -left-1.375": direction === "top-left",
    "-bottom-1.375 -left-1.375": direction === "bottom-left",
    "-top-1.375 -right-1.375": direction === "top-right",
    "-bottom-1.375 -right-1.375": direction === "bottom-right",
  });

  return (
    <div className="absolute w-x2 h-x2 hidden lg:block">
      <Square sizeClasses="w-x2 h-x2" color="blue" />
      <Text
        size="h2"
        color="white"
        custom="absolute font-aller top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-full lg:h-full lg:overflow-hidden"
      >
        {children}
      </Text>
      <Square
        sizeClasses="w-xs1 h-xs1"
        color="green"
        customWrapper={squareClasses}
      />
    </div>
  );
}
