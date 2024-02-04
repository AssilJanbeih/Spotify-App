import { Artist } from "src/app/artists/models/artist-response";
import { ExternalUrlsResponse } from "../external-urls-response";
import { ImageResponse } from "../image-response";
import { ReleaseDatePrecisionEnum } from "../../enum/release-date-precision-enum";
import { AlbumTypeEnum } from "../../enum/album-type-enum";

export interface AlbumItemResponse {
    album_group: AlbumTypeEnum;
    album_type: AlbumTypeEnum;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrlsResponse;
    href: string;
    id: string;
    images: ImageResponse[];
    name: string;
    release_date: Date;
    release_date_precision: ReleaseDatePrecisionEnum;
    total_tracks: number;
    type: AlbumTypeEnum;
    uri: string;
}
export interface AlbumApiResponse {
htef: string;
items: AlbumItemResponse[];
limit : number;
next : string;
offset : number;
previous : null;
total: number;
}