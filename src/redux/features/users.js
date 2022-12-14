import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    // Create the new user

    addNewUser: builder.mutation({
      query: (payload) => ({
        url: "/users",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Users"],
    }),

    // Delete the User
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    // Update the User

    updateUser: builder.mutation({
      query: (payload) => {
        console.log(payload);
        const { id, ...body } = payload;
        return {
          url: `/users/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useAddNewUserMutation,
  useUpdateUserMutation,
} = userSlice;
