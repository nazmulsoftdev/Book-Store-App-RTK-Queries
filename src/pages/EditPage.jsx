import React from "react";
import EditBook from "../components/EditBook/EditBook";
import { useParams } from "react-router-dom";
import { useGetSingeBookQuery } from "../features/api/apiSlice";
import Loading from "../components/UI/Loading";
import ErrorMessage from "../components/UI/ErrorMessage";

function EditPage() {
  const { editId } = useParams();

  const { data: books, isError, isLoading } = useGetSingeBookQuery(editId);

  // decide what to render

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <ErrorMessage Message="Something went wrong" />;
  }

  if (!isLoading && !isError && books?.id) {
    content = <EditBook book={books} />;
  }

  return <div>{content}</div>;
}

export default EditPage;
