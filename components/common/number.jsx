import Square from "../square";
import Text from "../typography/text";
import classNames from "classnames";

export default function Number({ children, direction }) {
  let squareClasses = classNames({
    absolute: true,
      "transition-transform transform -top-1.375 -left-1.375": true,
    "translate-x-0 translate-y-0": direction === "top-left",
    "translate-x-0 translate-y-137": direction === "bottom-left",
    "translate-x-137 translate-y-0": direction === "top-right",
    "translate-x-137 translate-y-137": direction === "bottom-right",
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
