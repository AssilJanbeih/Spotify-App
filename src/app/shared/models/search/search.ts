import { ArtistsItemResponse } from "src/app/artists/models/artist-item";
import { ArtistsSearchResponse } from "./artist-search-response";
import { ImageResponse } from "../image-response";
import { TracksResponse } from "../track/tracks-response";

export interface APISearchResponse {
    artists: ArtistsSearchResponse;
    tracks: TracksResponse;
}



