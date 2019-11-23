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
    parent?: number;
    date?: string;
    date_gmt?: string;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password?: string;
    title?: object;
    content?: object;
    author?: number;
    excerpt?: object;
    featured_media?: number;
    comment_status?: 'open' | 'closed';
    ping_status?: 'open' | 'closed';
    format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    meta?: object;
    sticky?: boolean;
    template?: string;
    categories?: number[];
    tags?: number[];
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
export declare const useCreatePostRevision: (parent: number, options: UseCreatePageRevision) => {
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
