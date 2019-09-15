declare type UseTaxonomies = {
    context?: 'view' | 'embed' | 'edit';
    type?: string;
};
declare type UseRetrieveTaxonomy = {
    taxonomy?: string;
    context?: 'view' | 'embed' | 'edit';
};
export declare const useTaxonomies: (options: UseTaxonomies) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveTaxonomy: (options: UseRetrieveTaxonomy) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
