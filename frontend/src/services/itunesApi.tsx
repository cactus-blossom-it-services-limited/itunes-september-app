import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Itune } from '../models/itune.model';

export const itunesApi = createApi({
    reducerPath: "itunesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/search/" }),
    endpoints:(builder) => ({
        itunes: builder.query<Itune, void>({
            query: () => `?term=jack+johnson`
        })
    })
})

export const { useItunesQuery } = itunesApi;    