export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export enum CategoryEnum {
    Business = 'business',
    Entertainment = 'entertainment',
    General = 'general',
    Health = 'health',
    Science = 'science',
    Sports = 'sports',
    Technology = 'technology'
}

export const categories: CategoryEnum[] = [
    CategoryEnum.Business,
    CategoryEnum.Entertainment,
    CategoryEnum.General,
    CategoryEnum.Health,
    CategoryEnum.Science,
    CategoryEnum.Sports,
    CategoryEnum.Technology
];

export type newsResultType = {
    author: string | null;
    content: string
    description: string
    publishedAt: string
    source: any
    title: string
    url: string
    urlToImage: string
}
