import LesserSlider from "./lesserSlider";
import Challenges from "./challenges";
import Summary from "./summary";

export default function GalleryBreak({ data }) {
  return (
    <div className="md:flex-100 lg:my-20 md:overflow-hidden">
      <div>
        {data.summary.length > 0 && <Summary text={data.summary} />}
        {data.slider && <LesserSlider slides={data.slider} />}
        {data.challenges && <Challenges challenges={data.challenges} />}
      </div>
    </div>
  );
}
