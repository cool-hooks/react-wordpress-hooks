declare type UsePages = {
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
    menu_order?: number;
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
    parent?: number[];
    parent_exclude?: number[];
    slug?: string[];
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'any';
};
declare type UseCreatePage = {
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
declare type UseRetrievePage = {
    readonly id?: number;
    context?: 'view' | 'embed' | 'edit';
    password?: string;
};
declare type UseUpdatePage = {
    readonly id?: number;
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
declare type UseDeletePage = {
    force?: boolean;
};
export declare const usePages: (options?: number | number[] | UsePages | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePage: (options: UseCreatePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePage: (options: UseRetrievePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdatePage: (options: UseUpdatePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePage: (id: number, options?: UseDeletePage | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
