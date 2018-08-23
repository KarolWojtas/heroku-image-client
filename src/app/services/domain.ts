export enum AlertType {
    INFO,
    DANGER,
    WARNING
}
export interface Alert {
    id: number;
    message: string;
    type: AlertType;
    date: Date;
}
export interface Image {
    id: number;
    description: string;
    username: string;
    links: Link[],
    isPublic: boolean;
    timestamp: Date
}
export enum FileFormats {
    JPG = 'jpg',
    JPEG = 'jpeg',
    PNG = 'png'

}
export interface Link {
    rel: string;
    href: string;
    hreflang: string;
    media: string;
    title: string;
    type: string;
    deprecation: string;
}
export interface ImagePage{
content: Image[];
pageable: {
    sort: Sort,
    pageSize: number,
    pageNumber: number,
    offset: number,
    paged: boolean,
    unpaged: boolean,
    }
number: number,
numberOfELements: number,
sort: Sort;
totalPages: number;
totalElements: number;
size: number,
links: Link[];
first: boolean;
last: boolean;

}
export interface Sort {
    unsorted: boolean;
    sorted: boolean;
}