
import { ExternalUrlsResponse } from "src/app/shared/models/external-urls-response";
import { ArtistTypeEnum } from "../enum/artist-type-enum";

export interface Artist {
    external_urls: ExternalUrlsResponse;
    href: string;
    id: string;
    name: string;
    type: ArtistTypeEnum;
    uri: string;
}