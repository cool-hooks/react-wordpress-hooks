declare type UsePages = {
    context: 'view' | 'embed' | 'edit';
    page: number;
    per_page: number;
    search: number;
    after: string;
    author: number;
    author_exclude: number[];
    before: string;
    exclude: number[];
    include: number[];
    menu_order: number;
    offset: number;
    order: 'asc' | 'desc';
    orderby: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'title' | 'menu_order';
    parent: number;
    parent_exclude: number[];
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
};
declare type UseCreatePage = {
    date: string;
    date_gmt: string;
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password: string;
    parent: number;
    title: string;
    content: string;
    author: number;
    excerpt: string;
    featured_media: number;
    comment_status: 'open' | 'close';
    ping_status: 'open' | 'close';
    menu_order: number;
    meta: object;
    template: string;
};
declare type UseRetrivePage = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
    password: string;
};
declare type UseUpdatePage = {
    readonly id: number;
    date: string;
    date_gmt: string;
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password: string;
    parent: number;
    title: string;
    content: string;
    author: number;
    excerpt: string;
    featured_media: number;
    comment_status: 'open' | 'close';
    ping_status: 'open' | 'close';
    menu_order: number;
    meta: object;
    template: string;
};
declare type UseDeletePage = {
    force: boolean;
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
export declare const useRetrivePage: (options: UseRetrivePage) => {
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
