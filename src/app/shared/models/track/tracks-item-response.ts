import { Artist } from "src/app/artists/models/artist-response";
import { AlbumResponse } from "../album/album-response";
import { ExternalUrlsResponse } from "../external-urls-response";
import { ExternalIDSResponse } from "../external-ids-response";
import { PurpleTypeEnum } from "../../enum/purple-type-enum";

export interface TracksItemResponse {
    album: AlbumResponse;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDSResponse;
    external_urls: ExternalUrlsResponse;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: null | string;
    track_number: number;
    type: PurpleTypeEnum;
    uri: string;
}
