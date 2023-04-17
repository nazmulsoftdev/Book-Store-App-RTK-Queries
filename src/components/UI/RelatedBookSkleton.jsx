import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RelatedBookSkleton() {
  return (
    <div className="w-[100%] ">
      <div className="flex flex-row items-center space-x-2">
        <div>
          <Skeleton className="w-32 h-32 rounded-lg" />
        </div>
        <div>
          <Skeleton className="w-40 h-3" count={2} />
          <div className="flex flex-row space-x-3">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="w-3 h-3" />
            <Skeleton className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedBookSkleton;
