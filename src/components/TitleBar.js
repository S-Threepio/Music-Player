import React from "react";
import right from "../imgs/right.png";
import left from "../imgs/left.png";
function TitleBar({ title, scrollLeft, scrollRight }) {
  return (
    <div className="flex w-4/5 justify-end items-center gap-2">
      <span className="text-left flex-1 font-bold text-4xl px-4">{title}</span>
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
  );
}

export default TitleBar;
