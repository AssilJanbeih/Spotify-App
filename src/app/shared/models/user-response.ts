import { FollowersResponse } from "src/app/artists/models/followers-response";
import { ExternalUrlsResponse } from "./external-urls-response";
import { ImageResponse } from "./image-response";

export interface User{
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
      filter_enabled: false,
      filter_locked: false
    },
    external_urls: ExternalUrlsResponse
    followers: FollowersResponse[],
    href: string;
    id: string;
    images: ImageResponse[];
    product: string;
    type: string;
    uri: string;
  }