import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import BookViewPage from "./pages/BookViewPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="addbook" element={<AddPage />} />
          <Route path="editbook/:editId" element={<EditPage />} />
          <Route path="bookView/:bookId" element={<BookViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
