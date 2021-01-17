import Text from "../typography/text";

export default function Card({ title, elements, lottie }) {
  return (
    <div className="bg-green w-full h-full">
      <Lottie></Lottie>
      <header>
        <Text size="h3" color="white">
          {title}
        </Text>
      </header>
    </div>
  );
}
