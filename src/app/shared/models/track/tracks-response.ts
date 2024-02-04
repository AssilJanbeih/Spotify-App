import { TracksItemResponse } from "./tracks-item-response";



export interface TracksResponse {
    href: string;
    items: TracksItemResponse[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}


