import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryResponse, CategoryType } from "../../types/category";
import { QuestionType } from "../../types/question";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], void>({
      query: () => "getCategories",
      transformResponse: (response: CategoryResponse) => response.data,
    }),
    getQuestions: builder.query<QuestionType[], void>({
      query: () => "getQuestions",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = categoryApi;
