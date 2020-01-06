declare type UsePageRevisions = {
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
declare type UseCreatePageRevision = {
    date?: string | null;
    date_gmt?: string | null;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password?: string;
    parent?: number;
    title?: object;
    content?: object;
    author?: number;
    excerpt?: object;
    featured_media?: number;
    comment_status?: 'open' | 'closed';
    ping_status?: 'open' | 'closed';
    menu_order?: number;
    meta?: object;
    template?: string;
};
declare type UseRetrievePageRevision = {
    parent?: number;
    id?: number;
    context?: 'view' | 'embed' | 'edit';
};
declare type UseDeletePageRevision = {
    parent?: number;
    force?: boolean;
};
export declare const usePageRevisions: (parent: number, options?: UsePageRevisions | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePageRevision: (parent: number, options: UseCreatePageRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePageRevision: (parent: number, type: "revisions" | "autosaves", options: UseRetrievePageRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePageRevision: (parent: number, id: number, options?: UseDeletePageRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
