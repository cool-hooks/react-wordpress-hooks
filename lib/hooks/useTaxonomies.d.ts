declare type UseTaxonomies = {
    context: 'view' | 'embed' | 'edit';
};
declare type UseRetriveTaxonomy = {
    context: 'view' | 'embed' | 'edit';
};
export declare const useTaxonomies: (options: UseTaxonomies) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetriveTaxonomy: (options: UseRetriveTaxonomy) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
