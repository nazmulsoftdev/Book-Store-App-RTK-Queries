import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { produce } from "immer";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (featuredSearched) => {
        let queryString = "";
        if (featuredSearched === "All") {
          queryString = `/books`;
        }
        if (featuredSearched === "Featured") {
          queryString = `/books?featured=true`;
        }
        if (featuredSearched === "Saved") {
          queryString = `/books?isSaved=true`;
        }
        return queryString;
      },
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    getRelatedBook: builder.query({
      query: ({ id, name }) => {
        const tags = name.split(" ");
        const likes = tags.map((tag) => `name_like=${tag}`);
        const queryString = `/books?${likes.join("&")}&_limit=5&id_ne=${id}`;

        return queryString;
      },
    }),
    getSingeBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    getEditBook: builder.mutation({
      query: ({ id, name, author, price, rating, featured, thumbnail }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({
          name,
          author,
          price,
          rating,
          featured,
          thumbnail,
        }),
        headers: { "Content-Type": "application/json" },
      }),
    }),

    getRemoveBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),

    getLike: builder.mutation({
      query: ({ id, currentLike }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({ likes: currentLike + 1 }),
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getDisLike: builder.mutation({
      query: ({ id, currentDisLike }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({ likes: currentDisLike + 1 }),
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getBookSaved: builder.mutation({
      query: ({ id, currentSave }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({ isSaved: !currentSave }),
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getBookComment: builder.mutation({
      query: ({ id, newComment }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({ comments: newComment }),
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useGetSingeBookQuery,
  useGetRelatedBookQuery,
  useGetLikeMutation,
  useGetDisLikeMutation,
  useGetBookSavedMutation,
  useGetEditBookMutation,
  useGetRemoveBookMutation,
  useGetBookCommentMutation,
} = bookApi;
