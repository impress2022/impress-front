import Image from "next/image";
import classNames from "classnames";
import Text from "../typography/text";

export default function GalleryPhoto({ photo, index }) {
  let imageClassess = classNames({
    "mb-5": true,
    "md:flex-40 xl:max-w-555 xl:max-h-555": !photo.gallery_full_width,
    "md:flex-100 md:my-6.25 xl:my-s-mar": photo.gallery_full_width,
  });

  let imageContainerclasses = classNames({
    "block-important shadow-caseInsetMobile md:shadow-caseInset": true,
    "md:mx-4 xl:mx-5": !photo.gallery_full_width,
    "md:mt-6.25 xl:mt-30p": !(index % 2) && !photo.gallery_full_width,
    "xl:-mt-20": index % 2,
  });

  return (
    <div className={imageClassess}>
      <div className={imageContainerclasses}>
        {photo.gallery_full_width && (
          <Image
            src={photo.gallery_image.sizes["twentytwenty-fullscreen"]}
            alt={photo.gallery_image.alt}
            width={photo.gallery_image.sizes["twentytwenty-fullscreen-width"]}
            height={photo.gallery_image.sizes["twentytwenty-fullscreen-height"]}
          />
        )}
        {!photo.gallery_full_width && (
          <Image
            src={photo.gallery_image.sizes["post-thumbnail"]}
            alt={photo.gallery_image.alt}
            width={photo.gallery_image.sizes["post-thumbnail-width"]}
            height={photo.gallery_image.sizes["post-thumbnail-height"]}
          />
        )}
      </div>
      {photo.gallery_text && (
        <Text size="body-16" custom="mt-7 md:max-w-50 md:float-right">
          {photo.gallery_text}
        </Text>
      )}
    </div>
  );
}
