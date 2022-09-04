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
    baseQuery: fetchBaseQuery({ baseUrl: "https://itunes.apple.com/lookup"}),
    tagTypes: ['Albums'],
    endpoints: (builder) => ({
        getAll: builder.query<Album[], void>({
            query: () => `?id=909253&entity=album`,
            providesTags: [{ type: "Albums", id: "LIST" }],
        }),
    }),
});