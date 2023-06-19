import React, { useRef } from "react";
import { pictures } from "../data/Pictures";
import right from "../imgs/right.png";
import left from "../imgs/left.png";

function Homepage() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col flex-1 items-center mt-24">
      {/* TrendingMenu */}
      <div className="flex w-4/5 justify-end items-center gap-2">
        <span className="text-left flex-1 font-bold text-4xl px-4">
          Trending
        </span>
        <img
          src={left}
          className="w-8 h-8 opacity-40 hover:opacity-100 hover:cursor-pointer"
          onClick={scrollLeft}
        />
        <img
          src={right}
          className="w-8 h-8 opacity-40 hover:opacity-100 hover:cursor-pointer"
          onClick={scrollRight}
        />
      </div>
      {/* trendingSongs */}
      <div
        ref={scrollRef}
        className="p-4 flex overflow-scroll w-4/5 gap-4 scrollbar-hide"
      >
        {pictures.map((p, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[300px] h-max hover:cursor-pointer"
          >
            <img src={p} className="w-[300px] h-[200px] object-cover" />
            <div className="font-semibold py-2">
              <div>The song of the scorpions</div>
              <div className="font-thin">Swanand Kirkire</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
