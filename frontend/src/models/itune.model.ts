interface Results {
    wrapperType: string;
    kind: string;
    artistId: number;
    artistName: string 
}

export interface Itune {
    resultCount?: number;
    results?: Results[];
}
