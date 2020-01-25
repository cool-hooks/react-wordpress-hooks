declare type UseRetrieveTaxonomies = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly type?: string;
};
declare type UseRetrieveTaxonomy = {
    readonly context?: 'view' | 'embed' | 'edit';
};
export declare const useRetrieveTaxonomies: (options: UseRetrieveTaxonomies) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveTaxonomy: (taxonomy: string, options: UseRetrieveTaxonomy) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
