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
declare type UseCreatePostRevision = {
    parent?: number;
    date?: string | null;
    date_gmt?: string | null;
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
declare type UseRetrievePostRevision = {
    parent?: number;
    id?: number;
    context?: 'view' | 'embed' | 'edit';
};
declare type UseDeletePostRevision = {
    parent?: number;
    force?: boolean;
};
export declare const usePostRevisions: (parent: number, options?: UsePostRevisions | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePostRevision: (parent: number, options: UseCreatePostRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePostRevision: (parent: number, type: "revisions" | "autosaves", options: UseRetrievePostRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePostRevision: (parent: number, id: number, options?: UseDeletePostRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
