import React from "react";

function Recommended({ picture }) {
  return (
    <div className="flex w-max h-max hover:cursor-pointer gap-2">
      <img src={picture} className="w-20 h-16 object-cover" />
      <div className="text-base font-semibold">
        <div>The song of the scorpions</div>
        <div className="text-base font-thin">Swanand Kirkire</div>
      </div>
    </div>
  );
}

export default Recommended;
