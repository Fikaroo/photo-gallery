import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryItem = ({ photo }) => {
  return (
    <div className="px-2 py-1 rounded-md">
      <LazyLoadImage
        src={photo.download_url}
        alt={photo.id}
        className="rounded-lg object-cover"
      />
      <span>{photo.author}</span>
    </div>
  );
};

export default GalleryItem;
