import React from "react";
import Book from "./Book";
import { useGetBookQuery } from "../../features/api/apiSlice";
import Loading from "../UI/Loading";
import ErrorMessage from "../UI/ErrorMessage";
import { useSelector } from "react-redux";

function Books() {
  const { featuredSearched } = useSelector((state) => state.filters);
  const { data: books, isLoading, isError } = useGetBookQuery(featuredSearched);
  const { searched } = useSelector((state) => state.filters);

  // decide what to render

  let BookContent = null;

  if (isLoading) {
    BookContent = <Loading />;
  }

  if (!isLoading && isError) {
    BookContent = <ErrorMessage Message="Something went wrong " />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    BookContent = <ErrorMessage Message="Opps Books Not Found " />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    // filter when user will search

    const filterSearch = books.filter((item) => {
      return item.name.toLowerCase().includes(searched.toLowerCase());
    });

    BookContent =
      filterSearch?.length > 0 ? (
        filterSearch.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <ErrorMessage Message="Result Not Found !" />
      );
  }

  return (
    <div className="w-[95%] m-auto lg:w-[90%] lg:m-auto ">
      <section>
        <div className="flex flex-wrap gap-3 justify-center mt-20">
          {BookContent}
        </div>
      </section>
    </div>
  );
}

export default Books;
