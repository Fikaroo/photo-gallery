import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../state/actions";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const { data, loading, error } = useSelector((state) => state.photos);
  const [limit, setLimit] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(limit));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-4">Gallery</h1>
      <div className="flex justify-center items-center mt-4 flex-col">
        <label htmlFor="">Set Limit Photos</label>
        <input
          type="number"
          placeholder="Set limit"
          className="border px-2 py-1 rounded-md w-56 mt-1"
          onChange={(e) => setLimit(e.target.value)}
        />
        <button
          className="px-4 py-1 bg-purple-400 rounded-lg mt-2 text-white"
          onClick={() => dispatch(getData(limit))}
        >
          Submit
        </button>
      </div>
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {Array(1, 2, 3, 4, 5).map((index) => (
            <div className="px-2 py-1" key={index}>
              <div className="rounded-md animate-pulse bg-slate-500 h-52"></div>
              <p className="w-48 mt-2 h-5 rounded-md animate-pulse bg-slate-500"></p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {data.map((photo) => (
            <GalleryItem key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
