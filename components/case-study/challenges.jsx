import Text from "../typography/text";

export default function Challenges({ challenges }) {
  console.log(challenges);
  return (
    <div className="w-full my-7.5r md:my-8r lg:flex lg:flex-row-reverse lg:items-center lg:mt-600 lg:mb-500">
      <div className="mb-10">
        <Text size="h2">
          <span className="text-1.75 md:hidden">
            Wyzwania, z którymi się zmierzyliśmy
          </span>
          <div className="hidden md:block">
            Wyzwania, z którymi się zmierzyliśmy
          </div>
        </Text>
      </div>
      <div className="bg-green shadow-challenges md:shadow-none flex flex-col py-12 md:py-24 md:mx-16 lg:w-2/4">
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
