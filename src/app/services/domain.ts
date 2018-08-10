export enum AlertType{
    INFO,
    DANGER,
    WARNING
}
export interface Alert{
    id: number;
    message: string;
    type: AlertType;
    date: Date;
}
export interface Image{
        id: number;
        description: string;
        width: number,
        height: number,
        username: string;
        links: [
            {
                rel: string;
                href: string;
                hreflang: string;
                media: string;
                title: string;
                type: string;
                deprecation: string;
            }
        ],
        public: boolean
}
export enum FileFormats{
    JPG= 'jpg',
    JPEG = 'jpeg',
    PNG='png'
    
}