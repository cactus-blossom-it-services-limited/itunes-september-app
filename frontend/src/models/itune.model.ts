import { ResultDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export interface Itune {
    resultCount?: number;
    results: [Object];
    wrapperType: string;
    kind: string;
    artistId: number;
    artistName: string; 
}
