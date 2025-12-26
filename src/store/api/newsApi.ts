import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News, User } from '../../models/NewsModel';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getNews: builder.query<News[], { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 18 }) => 
        `/posts?_page=${page}&_limit=${limit}`,
      transformResponse: async (response: any[], meta, arg) => {
        // Fetch users to get author names
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await usersResponse.json();
        
        return response.map((post) => ({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
          image: `https://picsum.photos/seed/${post.id}/400/300`,
          author: users.find(u => u.id === post.userId)?.name || 'Unknown',
          date: new Date(Date.now() - Math.random() * 1e10).toLocaleDateString(),
        }));
      },
    }),
    getNewsDetail: builder.query<News, number>({
      query: (id) => `/posts/${id}`,
      transformResponse: async (response: any, meta, arg) => {
        const usersResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${response.userId}`
        );
        const user: User = await usersResponse.json();
        
        return {
          id: response.id,
          userId: response.userId,
          title: response.title,
          body: response.body,
          image: `https://picsum.photos/seed/${response.id}/800/400`,
          author: user.name,
          email: user.email,
          website: user.website,
          company: user.company.name,
          date: new Date().toLocaleDateString(),
        };
      },
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsDetailQuery, useGetUsersQuery } = newsApi;