import React from "react";

function TrendingSong({ picture }) {
  return (
    <div className="flex flex-col min-w-[300px] h-max hover:cursor-pointer">
      <img src={picture} className="w-[300px] h-[200px] object-cover" />
      <div className="font-semibold py-2">
        <div>The song of the scorpions</div>
        <div className="font-thin">Swanand Kirkire</div>
      </div>
    </div>
  );
}

export default TrendingSong;
