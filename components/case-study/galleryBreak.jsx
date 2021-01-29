import LesserSlider from "./lesserSlider";
import Challenges from "./challenges";
import Summary from "./summary";

export default function GalleryBreak({ data }) {
  return (
    <div className="md:flex-100 xl:my-20 overflow-hidden">
      <div>
        <Summary text={data.summary} />
        <LesserSlider slides={data.slider} />
        <Challenges challenges={data.challenges} />
      </div>
    </div>
  );
}
