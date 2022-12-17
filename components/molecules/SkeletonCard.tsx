import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white flex flex-col gap-2 animate-pulse">
      <div className="h-32 bg-gray-400" />
      <div className="w-full h-4 bg-gray-400" />
      <div className="w-full h-4 bg-gray-400" />
      <div className="w-full h-4 bg-gray-400" />
    </div>
  );
};

export default SkeletonCard;
