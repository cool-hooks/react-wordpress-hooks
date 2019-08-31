declare type UsePostRevisions = {
    parent?: number;
    context?: 'view' | 'embed' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
};
declare type RetrievePostRevision = {
    parent?: number;
    id?: number;
    context?: 'view' | 'embed' | 'edit';
};
declare type DeletePostRevision = {
    parent?: number;
    force?: boolean;
};
export declare const usePostRevisions: (parent: number, options: UsePostRevisions) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePostRevision: (parent: number, options: RetrievePostRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePostRevision: (parent: number, id: number, options?: DeletePostRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
