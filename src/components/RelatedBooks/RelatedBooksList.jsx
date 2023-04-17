import React from "react";
import { CiStar as StartIcon } from "react-icons/ci";
import { Link } from "react-router-dom";

function RelatedBooksList({ book }) {
  const { id, name, author, rating, thumbnail } = book || {};
  return (
    <Link to={`/bookView/${id}`}>
      <div className="max-w-sm h-36 flex justify-center items-center space-x-2 bg-slate-50 shadow-xl rounded-sm overflow-hidden">
        <div>
          <img
            className="h-[100%] w-[200px] object-fill"
            src={thumbnail}
            alt="thum"
          />
        </div>
        <div>
          <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {author}
          </p>
          <p className="flex">
            {[...new Array(rating)].map((arr, index) => {
              return (
                <div key={index}>
                  <StartIcon color="gold" size={20} />
                </div>
              );
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default RelatedBooksList;
