import {CSSProperties} from "react";

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

export function formatDate(date: string){
    let fullDate = new Date(date);
    let dateInString = fullDate.toString().split(' ');
    const hour = parseInt(dateInString[4].substring(0, 2));
    const time = hour > 12;
    let output;
    if (time)
    {
        output = `${hour - 12}:${dateInString[4].substring(3,5)} pm on ${dateInString[2]} ${dateInString[1]} ${dateInString[3]} ${dateInString[0]}`
    }
    else{
       output = `${hour}:${dateInString[4].substring(3,5)} am on ${dateInString[2]} ${dateInString[1]} ${dateInString[3]} ${dateInString[0]}`;
    }
    return output;
}

export const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '30%',
    marginBottom: '30%'
} as CSSProperties
