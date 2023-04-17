import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFeaturedAc } from "../../features/filters/filterSlice";

function BookFilter() {
  const { featuredSearched } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // filter handler

  const filterHandler = (value) => {
    dispatch(searchFeaturedAc(value));
  };

  return (
    <div className="w-[95%] m-auto lg:w-[90%] lg:m-auto ">
      <div className="flex justify-between items-center mt-16">
        <p className="text-xl font-bold">Book List</p>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => filterHandler("All")}
            size="sm"
            pill={true}
            color={featuredSearched === "All" ? "success" : "gray"}
          >
            All
          </Button>
          <Button
            onClick={() => filterHandler("Featured")}
            size="sm"
            pill={true}
            color={featuredSearched === "Featured" ? "success" : "gray"}
          >
            Featured
          </Button>
          <Button
            onClick={() => filterHandler("Saved")}
            size="sm"
            pill={true}
            color={featuredSearched === "Saved" ? "success" : "gray"}
          >
            Saved
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookFilter;
