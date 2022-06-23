export enum ECategory {
    "Lazer",
    "Utilidades",
    "Emergência"
}

export interface IService {
    title: string
    date?: Date
    time: string,
    ticket: string
    tags: string
    location: string
    address: string
    bgImg: string
    description: string
    classification?: string
    type: string
    category?: ECategory
}

export interface IFCProps {
    children: React.ReactNode;
}