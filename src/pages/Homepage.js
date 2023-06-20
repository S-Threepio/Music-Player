import React, { useRef, useEffect } from "react";
import { pictures } from "../data/Pictures";

import TitleBar from "../components/TitleBar";
import TrendingSong from "../components/TrendingSong";
import Recommended from "../components/Recommended";

function Homepage() {
  const trendingRef = useRef(null);
  const recommendedRef = useRef(null);

  useEffect(() => {
    // Add null check before accessing the refs
    if (trendingRef.current) {
      trendingRef.current.scrollLeft = 0;
    }
    if (recommendedRef.current) {
      recommendedRef.current.scrollLeft = 0;
    }
  }, []);

  const scrollTrends = (right) => {
    var slider = -600;
    if (right) {
      slider = 600;
    }
    trendingRef.current.scrollBy({
      left: slider,
      behavior: "smooth",
    });
  };

  const scrollRec = (right) => {
    var slider = -600;
    if (right) slider = 600;
    recommendedRef.current.scrollBy({
      left: slider,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col flex-1 items-center mt-12 gap-10">
      <div className="flex flex-col w-full items-center">
        <TitleBar
          title="Trending"
          scrollLeft={() => scrollTrends(false)}
          scrollRight={() => scrollTrends(true)}
        />
        <div
          ref={trendingRef}
          className="p-4 flex overflow-scroll w-4/5 gap-4 scrollbar-hide"
        >
          {pictures.map((p, index) => (
            <TrendingSong key={index} picture={p} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full items-center">
        <TitleBar
          title="Recommended"
          scrollLeft={() => scrollRec(false)}
          scrollRight={() => scrollRec(true)}
        />
        <div
          ref={recommendedRef}
          className="grid grid-flow-col grid-rows-3 w-4/5 gap-6 p-4 overflow-x-auto scrollbar-hide"
        >
          {pictures.map((p, index) => (
            <Recommended key={index} picture={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
