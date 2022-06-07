import Image from "next/image";
import classNames from "classnames";
import Text from "../typography/text";

export default function GalleryPhoto({ photo, index }) {
  let imageClassess = classNames({
    "mb-5": true,
    "md:flex-40 lg:max-w-555 md:mx-4": !photo.gallery_full_width,
    "md:flex-100 md:my-6.25": photo.gallery_full_width,
  });

  //shadow-caseInsetMobile md:shadow-caseInset
  let imageContainerclasses = classNames({
    "block-important w-full h-full relative": true,
    // "md:h-625 lg:h-80vh": photo.gallery_full_width,
    "md:mt-6.25": !(index % 2) && !photo.gallery_full_width,
    // "lg:-mt-20": index % 2,
  });

  return (
    <div className={imageClassess}>
      <div className={imageContainerclasses}>
        {photo.gallery_full_width && photo.gallery_image && (
          <Image
            quality={100}
            src={photo.gallery_image.sizes["twentytwenty-fullscreen"]}
            alt={photo.gallery_image.alt}
            // layout="fill"
            // objectFit="contain"
            width={photo.gallery_image.sizes["twentytwenty-fullscreen-width"]}
            height={photo.gallery_image.sizes["twentytwenty-fullscreen-height"]}
          />
        )}
        {!photo.gallery_full_width && photo.gallery_image && (
          <Image
            quality={100}
            src={photo.gallery_image.sizes["post-thumbnail"]}
            alt={photo.gallery_image.alt}
            // layout="fill"
            // objectFit="cover"
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
