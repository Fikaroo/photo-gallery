import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryItem = ({ photo }) => {
  return (
    <div className="px-2 py-1 rounded-md">
      <LazyLoadImage
        src={photo.download_url}
        alt={photo.id}
        className="mb-2 rounded-lg object-cover transition-all delay-200 md:hover:scale-105 hover:cursor-pointer"
      />
      <span>{photo.author}</span>
    </div>
  );
};

export default GalleryItem;
