import React from "react";
import BookView from "../components/BookView/BookView";
import { useGetSingeBookQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import ErrorMessage from "../components/UI/ErrorMessage";
import RelatedBooks from "../components/RelatedBooks/RelatedBooks";
import RelatedBookSkleton from "../components/UI/RelatedBookSkleton";

function BookViewPage() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetSingeBookQuery(bookId);

  //    decide what to render

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <ErrorMessage Message="This Book Not Found" />;
  }

  if (!isLoading && !isError && book?.id) {
    content = <BookView book={book} />;
  }

  return (
    <div className=" lg:w-[95%] lg:m-auto lg:grid lg:grid-cols-6 lg:gap-3 ">
      <div className="col-span-4">{content}</div>
      <div className="col-span-2 h-screen ">
        {book?.id ? (
          <RelatedBooks id={book.id} name={book.name} />
        ) : isLoading ? (
          <>
            <RelatedBookSkleton />
            <RelatedBookSkleton />
            <RelatedBookSkleton />
          </>
        ) : (
          <ErrorMessage Messgae="There was an error !" />
        )}
      </div>
    </div>
  );
}

export default BookViewPage;
