declare type UseMedia = {
    context?: 'view' | 'embed' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    after?: string;
    author?: number[];
    author_exclude?: number[];
    before?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    parent?: number[];
    parent_exclude?: number[];
    slug?: string[];
    status?: ['inherit' | 'private' | 'trash'];
    readonly media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
    readonly mime_type?: string;
};
declare type UseCreateMedia = {
    date?: string | null;
    date_gmt?: string | null;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    title?: object;
    author?: number;
    comment_status?: 'open' | 'closed';
    ping_status?: 'open' | 'closed';
    meta?: object;
    template?: string;
    alt_text?: string;
    caption?: object;
    description?: object;
    post?: number;
};
declare type UseRetrieveMedia = {
    readonly id?: number;
    context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateMedia = {
    readonly id?: number;
    date?: string | null;
    date_gmt?: string | null;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    title?: object;
    author?: number;
    comment_status?: 'open' | 'closed';
    ping_status?: 'open' | 'closed';
    meta?: object;
    template?: string;
    alt_text?: string;
    caption?: object;
    description?: object;
    post?: number;
};
declare type UseDeleteMedia = {
    force?: boolean;
};
export declare const useMedia: (options?: number | number[] | UseMedia | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateMedia: (options: UseCreateMedia) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveMedia: (options: UseRetrieveMedia) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateMedia: (options: UseUpdateMedia) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteMedia: (id: number, options?: UseDeleteMedia | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
