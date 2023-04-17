import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useGetEditBookMutation } from "../../features/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EditBook({ book }) {
  const {
    id,
    name: editName,
    author: editAuthor,
    thumbnail: editThumbnail,
    price: editPrice,
    rating: editRating,
    featured: editFeatured,
  } = book || {};

  const [name, setName] = useState(editName);
  const [author, setAuthor] = useState(editAuthor);
  const [thumbnail, setThumbnail] = useState(editThumbnail);
  const [price, setPrice] = useState(editPrice);
  const [rating, setRating] = useState(editRating);
  const [featured, setFeatured] = useState(editFeatured);

  const [getEditBook, { isError, isSuccess }] = useGetEditBookMutation();

  const navigate = useNavigate("");

  useEffect(() => {
    if (isSuccess) navigate(-1, { replace: true });
  }, [isSuccess, navigate]);

  // Edit Book Form Reset Handler

  const reset = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  //Edit  Book Form Submit Handler

  const editbookFormHandler = (e) => {
    e.preventDefault();

    getEditBook({
      id,
      name,
      author,
      thumbnail,
      price: Number(price),
      rating: Number(rating),
      featured,
    });

    reset();
  };

  return (
    <div className="mt-5">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={editbookFormHandler} className="book-form">
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
            Edit Book
          </Button>
        </form>
        {isError &&
          toast.error("can't edit something went wrong ", {
            position: "top-right",
          })}
        {isSuccess &&
          toast.success("Successfully Edited ", {
            position: "top-right",
          })}
        <Toaster />
      </div>
    </div>
  );
}

export default EditBook;
