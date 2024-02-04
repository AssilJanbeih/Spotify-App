import { ArtistsItemResponse } from "src/app/artists/models/artist-item";

export interface ArtistsSearchResponse {
    href: string;
    items: ArtistsItemResponse[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}
