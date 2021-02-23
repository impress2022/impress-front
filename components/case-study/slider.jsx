import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrow from "../common/sliderArrow";
import Text from "../typography/text";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function Slider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const windowSize = useWindowSize();

  let slidesPerView = 0;

  if (windowSize.width < 768) {
    slidesPerView = 1.2;
  } else if (windowSize.width < 1280) {
    slidesPerView = 2.2;
  } else {
    slidesPerView = 3.2;
  }

  const handleClick = (value) => {
    swiper.slideTo(currentSlide + value);
    setCurrentSlide(currentSlide + value);
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
      autoHeight={false}
      onSlideChange={(item) => {
        setCurrentSlide(item.activeIndex);
      }}
      onSwiper={setSwiper}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-280 h-full bg-grey-hover relative ratio-square">
            <div className="absolute -bottom-14 left-1 pointer-events-none">
              <Text size="h4">
                {index < 10 ? "0" + (index + 1) : index + 1}
              </Text>
            </div>
            <div className="p-8 pb-24 md:pt-16 xl:pt-24 md:px-12">
              <div className="mb-5 md:mb-7">
                <Text size="h3" color="white">
                  {item.slider_efect_title}
                </Text>
              </div>
              <div>
                <Text size="body-16" color="white">
                  {item.slider_efect_desc}
                </Text>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="arrows flex xl:mt-150">
        <SliderArrow
          direction="left"
          active={swiper ? swiper.isBeginning !== true : false}
          handleClick={handleClick}
          currentIndex={currentSlide}
          maxElements={data.length}
        />
        <SliderArrow
          active={swiper ? swiper.isEnd !== true : false}
          handleClick={handleClick}
          currentIndex={currentSlide}
          maxElements={data.length}
        />
      </div>
    </Swiper>
  );
}
