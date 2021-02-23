import Text from "../typography/text";
import Square from "../square";

export default function Challenges({ challenges }) {
  return (
    <div className="w-full my-7.5r md:my-80 md:mt-44 lg:flex lg:flex-row-reverse lg:items-center lg:justify-end lg:mt-700 lg:mb-500">
      <div className="mb-10 md:mb-7.5r lg:ml-24">
        <Text size="h2">
          <span className="text-1.75 md:hidden">
            Wyzwania, z którymi się zmierzyliśmy
          </span>
          <div className="hidden md:block md:transform md:translate-x-24 lg:hidden">
            Wyzwania, z którymi się <br />
            zmierzyliśmy
          </div>
          <div className="hidden lg:block">
            Wyzwania, z którymi <br />
            się zmierzyliśmy
          </div>
        </Text>
      </div>
      <div className="bg-green md:relative shadow-challenges md:shadow-none md:transform md:translate-x-3 lg:translate-x-14 flex flex-col py-12 md:py-24 md:w-1/2 md:mx-16 lg:w-600">
        <Square
          color="grey"
          sizeClasses="md:w-x1 md:h-x1 lg:w-x2 lg:h-x2"
          customWrapper="hidden md:block md:absolute md:top-0 md:left-0 md:transform md:-translate-y-full md:-translate-x-full"
        />
        <Square
          color="blue"
          sizeClasses="md:w-xs4 md:h-xs4 lg:w-xs2 lg:h-xs2"
          customWrapper="hidden md:block md:absolute md:top-0 md:right-0 md:transform md:-translate-y-full md:translate-x-full"
        />
        <Square
          color="red"
          sizeClasses="md:w-x3 md:h-x3 xl:w-x5 xl:h-x5"
          customWrapper="hidden md:block md:absolute md:bottom-0 md:right-0 md:transform md:translate-y-full md:translate-x-full"
        />
        <div className="md:flex md:flex-col md:justify-center md:items-center">
          {challenges.map((item, index) => (
            <Text
              key={index}
              size="body-16"
              custom="my-8 mx-6 pl-4 lg:pl-8 shadow-challenges-li md:max-w-25"
            >
              {item.challenge}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
}
