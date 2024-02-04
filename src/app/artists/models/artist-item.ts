import { ExternalUrlsResponse } from "src/app/shared/models/external-urls-response";
import { ArtistTypeEnum } from "../enum/artist-type-enum";
import { FollowersResponse } from "./followers-response";
import { ImageResponse } from "src/app/shared/models/image-response";

export interface ArtistsItemResponse {
    external_urls: ExternalUrlsResponse;
    followers: FollowersResponse;
    genres: string[];
    href: string;
    id: string;
    images: ImageResponse[];
    name: string;
    popularity: number;
    type: ArtistTypeEnum;
    uri: string;
}