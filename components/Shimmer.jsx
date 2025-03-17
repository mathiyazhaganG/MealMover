import React from "react";

const ShimmerCard = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg overflow-hidden shadow-md">
      <div className="w-full h-40 bg-gray-300"></div>
      <div className="p-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
