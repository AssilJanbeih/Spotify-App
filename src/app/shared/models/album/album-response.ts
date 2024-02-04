import { AlbumTypeEnum } from "src/app/shared/enum/album-type-enum";
import { Artist as ArtistResponse } from "src/app/artists/models/artist-response";
import { ImageResponse } from "../image-response";
import { ReleaseDatePrecisionEnum } from "../../enum/release-date-precision-enum";
import { ExternalUrlsResponse } from "../external-urls-response";

export interface AlbumResponse {
    album_type: AlbumTypeEnum;
    artists: ArtistResponse[];
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