import React, { useRef } from "react";
import { pictures } from "../data/Pictures";

import TrendingMenu from "../components/TrendingMenu";
import TrendingSong from "../components/TrendingSong";

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
      <TrendingMenu scrollLeft={scrollLeft} scrollRight={scrollRight} />
      {/* trendingSongs */}
      <div
        ref={scrollRef}
        className="p-4 flex overflow-scroll w-4/5 gap-4 scrollbar-hide"
      >
        {pictures.map((p, index) => (
          <TrendingSong key={index} picture={p} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
