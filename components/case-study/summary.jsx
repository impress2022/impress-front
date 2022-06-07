import Square from "../square";
import Text from "../typography/text";

export default function Summary({ text }) {
  return (
    <div className="my-150 md:grid md:grid-cols-12 relative xl:my-80 xl:mt-64">
      <Square
        sizeClasses="w-xs5 h-xs5 md:w-x3 md:h-x3 lg:w-x5 lg:h-x5"
        customWrapper="w-xs5 h-xs5 md:w-x3 md:h-x3 lg:w-x5 lg:h-x5 relative md:col-span-2"
        color="red"
      >
        <Square
          sizeClasses="w-xs4 h-xs4 md:w-x1 md:h-x1 lg:w-x2 lg:h-x2"
          customWrapper="absolute right-0 top-0 transform translate-x-full -translate-y-full"
          color="green"
        />
      </Square>
      <div className="hidden md:block"></div>
      <Text
        size="p"
        custom="text-1.5 leading-12 font-normal font-en-sans my-12 md:mx-2 md:col-span-8 md:text-1.75 md:leading-3r lg:my-150"
      >
        {text}
      </Text>
      <Square
        sizeClasses="w-xs3 h-xs3 md:w-x1 md:h-x1 lg:w-x2 lg:h-x2"
        customWrapper="w-xs3 h-xs3 md:w-x1 md:h-x1 lg:w-x2 lg:h-x2 relative float-right md:float-none md:col-span-1 md:absolute md:right-0 md:-bottom-8"
        color="green"
      >
        <Square
          sizeClasses="w-xs1 h-xs1 md:w-xs4 md:h-xs4 lg:w-xs2 lg:h-xs2"
          customWrapper="absolute left-0 bottom-0 transform -translate-x-full translate-y-full"
          color="grey"
        />
      </Square>
    </div>
  );
}
