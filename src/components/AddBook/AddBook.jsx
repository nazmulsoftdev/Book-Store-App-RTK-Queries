import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import { useAddBookMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate(-1, { replace: true });
  }, [isSuccess, navigate]);

  // decide what to render

  let Content = null;
  if (!isLoading && isError) {
    Content = toast.error("Con't post something went wrong !", {
      position: "top-right",
      duration: 3000,
    });
  }
  if (!isLoading && !isError && isSuccess) {
    Content = toast.success("Successfully Book added !", {
      position: "top-right",
      duration: 3000,
    });
  }

  // Book Form Reset Handler

  const reset = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  // Book Form Submit Handler

  const bookFormHandler = (e) => {
    e.preventDefault();
    addBook({
      name,
      author,
      thumbnail,
      price: Number(price),
      rating: Number(rating),
      featured,
      likes: 0,
      dislikes: 0,
      isSaved: false,
      comments: [],
    });

    reset();
  };

  return (
    <div className="mt-5">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={bookFormHandler} className="book-form">
          <div className="space-y-2">
            <label>Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label>Author</label>
            <input
              required
              className="text-input"
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label>Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label>Price</label>
              <input
                required
                className="text-input"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label>Rating</label>
              <input
                required
                className="text-input"
                type="number"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={() => setFeatured(!featured)}
            />
            <label className="ml-2 text-sm"> This is a featured book </label>
          </div>

          <Button
            className="w-full"
            type="submit"
            outline={true}
            gradientDuoTone="greenToBlue"
          >
            {isLoading ? "Loading " : "Submit"}
          </Button>
        </form>
        {Content}
        <Toaster />
      </div>
    </div>
  );
}

export default AddBook;
