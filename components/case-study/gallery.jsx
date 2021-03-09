import React from "react";
import GalleryPhoto from "./galleryPhoto";
import GalleryBreak from "./galleryBreak";
import Text from "../typography/text";

export default function Gallery({ photos, data, title }) {
  let gallery = [];
  let c = 0;
  let middleIndex = Math.round(photos.length / 2);

  let smallCount = 0;
  let i = 0;
  let lastIdx = 0;
  for (const el of photos) {
    if (!el.gallery_full_width) {
      smallCount++;
      lastIdx = i;
    }
    i++;
  }

  let counter = 0
  for (const el of photos) {
    counter++;
    //&& data.summary.length > 0
    if (c === middleIndex) {
      if (smallCount % 2 === 1) {
        gallery.push(
          <div
            className="hidden md:block md:flex-40 md:min-w-387 lg:min-w-0 lg:max-w-555 md:h-1"
            key={counter}
          />
        );
      }

      if (data.summary || (data.sliders && data.sliders.length > 0) || data.slider || data.challenges ) {
        gallery.push(<GalleryBreak key={counter + 30000} data={data} />);
      }
    }

    if (c === photos.length - 1) {
      if (smallCount % 2 === 1) {
        gallery.push(
          <div
            className="hidden md:block  md:flex-40 md:min-w-387 lg:min-w-0 lg:max-w-555 md:h-1"
            key={counter + 3000}
          />
        );
      }
    }

    gallery.push(<GalleryPhoto key={c} photo={el} index={c} />);

    c++;
  }

  return (
    <>
      <Text size="p" custom="text-1.75 leading-3r font-aller md:mt-20">{title}</Text>
      <div className="md:flex md:flex-wrap md:justify-center">{gallery}</div>
    </>
  );
}
