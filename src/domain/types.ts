export enum ECategory {
    "Lazer",
    "Utilidades",
    "Emergência"
}

export interface IService {
    title: string
    data?: Date
    tags: string[]
    location: string
    bgImg: string
    description: string
    category?: ECategory
}

export interface IFCProps {
    children: React.ReactNode;
}