import React from "react";
import RelatedBookSkleton from "../UI/RelatedBookSkleton";
import { useGetRelatedBookQuery } from "../../features/api/apiSlice";
import ErrorMessage from "../UI/ErrorMessage";
import RelatedBooksList from "./RelatedBooksList";

function RelatedBooks({ id, name }) {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetRelatedBookQuery({ id, name });

  let content = null;

  if (isLoading) {
    content = (
      <>
        <RelatedBookSkleton />
        <RelatedBookSkleton />
        <RelatedBookSkleton />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage Message="Something went wrong " />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <ErrorMessage Message="Related Books not found !" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books.map((book) => (
      <RelatedBooksList key={book.id} book={book} />
    ));
  }
  return (
    <div className="flex flex-col justify-center gap-3 scrollbar   lg:h-3/4 lg:overflow-scroll">
      {content}
    </div>
  );
}

export default RelatedBooks;
