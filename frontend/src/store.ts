import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Album {
    wrapperType: string;
    artistType: string;
    artistName: string;
    artistLinkUrl: string;
    artistId: string;
    amgArtistId: string;
    primaryGenreName: string;
    primaryGenreId: string;
    active: boolean;
    done: boolean;
}

export const albumApi = createApi({
    reducerPath: "albumApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/search/"}),
    tagTypes: ['Albums'],
    endpoints: (builder) => ({
        getAll: builder.query<Album[], void>({
            query: () => `?term=jack+johnson`,
            providesTags: [{ type: "Albums", id: "LIST" }],
        }),
    }),
});