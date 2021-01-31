import Text from "../typography/text";
import Image from "next/image";
import SubpagesLottie from "../lottie/subpagesLottie";

export default function Activity({ activity }) {
  return (
    <div
      id={activity.activity_animation}
      className="activity mt-s-mar lg:mt-500 xl:mt-s-mar md:w-45p flex flex-col-reverse justify-end lg:w-full lg:flex-row lg:items-center lg:h-100vh"
    >
      <div className="lg:max-w-40 lg:mr-200">
        <div className="my-12">
          <Text size="h2" custom="mb-8">
            {activity.activity_title}
          </Text>
          <Text size="body-16" custom="lg:text-1.125 lg:leading-8">
            {activity.activity_description}
          </Text>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:ml-20p xl:mt-24">
          {activity.activity_services.map((item, index) => (
            <div key={index} className="mb-7 lg:mb-0">
              <Text size="body-bold-18" custom="mb-4">
                {item.service_name}
              </Text>
              <Text size="body-16">{item.service_desc}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 transform -translate-y-full w-1/4 md:w-1/3 lg:w-2/5">
          <SubpagesLottie lottie={activity.activity_animation} />
        </div>
        <div className="block-important shadow-dark md:shadow-dark-wide">
          <Image
            quality={100}
            src={activity.activity_image.sizes["post-thumbnail"]}
            width={activity.activity_image.sizes["post-thumbnail-width"]}
            height={activity.activity_image.sizes["post-thumbnail-height"]}
            alt={activity.activity_image.alt}
          />
        </div>
      </div>
    </div>
  );
}
