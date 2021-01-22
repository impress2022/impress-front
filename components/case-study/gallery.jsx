import React from "react";
import GalleryPhoto from "./galleryPhoto";
import GalleryBreak from "./galleryBreak";

export default function Gallery({ photos }) {
  let gallery = [];
  let c = 0;
  let middleIndex = Math.round(photos.length / 2);

  for (const el of photos) {
    if (c === middleIndex) {
      gallery.push(<GalleryBreak />);
    }

    gallery.push(<GalleryPhoto />);

    c++;
  }

  return gallery;
}
