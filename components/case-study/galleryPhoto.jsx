import Image from "next/image";
import classNames from "classnames";
import Text from "../typography/text";

export default function GalleryPhoto({ photo, index }) {
  let imageClassess = classNames({
    "mb-5": true,
    "md:flex-40 xl:max-w-555": !photo.gallery_full_width,
    "md:flex-100 md:mb-6.25 xl:mb-s-mar": photo.gallery_full_width,
  });

  let imageContainerclasses = classNames({
    "block-important shadow-caseInsetMobile md:shadow-caseInset": true,
    "md:mx-4 xl:mx-5": !photo.gallery_full_width,
    "md:mt-6.25 xl:mt-200": !(index % 2),
    "xl:-mt-20": index % 2,
  });

  return (
    <div className={imageClassess}>
      <div className={imageContainerclasses}>
        <Image
          src={photo.gallery_image.url}
          alt={photo.gallery_image.alt}
          width={photo.gallery_image.width}
          height={photo.gallery_image.height}
        />
      </div>
      {photo.gallery_text && (
        <Text size="body-16" custom="mt-7 md:max-w-50 md:float-right">
          {photo.gallery_text}
        </Text>
      )}
    </div>
  );
}
