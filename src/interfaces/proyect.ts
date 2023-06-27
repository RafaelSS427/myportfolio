
export type LinksType = {
    name: 'github' | 'figma' | 'browser',
    url: string
}

export interface Proyect {
    title: string;
    description: string;
    technologies: string[];
    featured: boolean;
    linksType: LinksType[]
}