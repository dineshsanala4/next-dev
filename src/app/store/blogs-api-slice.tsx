import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../shared/interfaces/blogs.interface";

export const apiSlice: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8001/api",
  }),

  endpoints: (builder) => ({
    fetchBlogs: builder.query<Blog[], number | void>({
      query: () => `/subscriber/articles/backend/`,
    }),
    fetchBlogById: builder.query<Blog[], number | void>({
      query: (id: any) => ({
        url: `/subscriber/articles/details/${id}`,
        method: "GET",
      }),
    }),
    addBlog: builder.query<Blog[], number | void>({
      query: (payload: any) => ({
        url: `/admin/articles/`,
        method: "POST",
        body: payload.body,
      }),
    }),
    editBlog: builder.query<Blog[], number | void>({
      query: (payload: any) => ({
        url: `/admin/articles/${payload.id}/`,
        method: "PUT",
        body: payload.body,
      }),
    }),
    deleteBlog: builder.query<Blog[], number | void>({
      query: (payload: any) => ({
        url: `/admin/articles/${payload.id}/`,
        method: "DELETE",
        body: payload.body,
      }),
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useAddBlogQuery,
  useEditBlogQuery,
  useDeleteBlogQuery,
} = apiSlice;
