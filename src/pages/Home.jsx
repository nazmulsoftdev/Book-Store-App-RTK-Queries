import React from "react";
import BookFilter from "../components/BookFilter/BookFilter";
import Books from "../components/Book/Books";

function Home() {
  return (
    <div>
      <BookFilter />
      <Books />
    </div>
  );
}

export default Home;
