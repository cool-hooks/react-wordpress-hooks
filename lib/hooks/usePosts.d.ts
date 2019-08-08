declare type UsePosts = {
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
    offset: number;
    order: 'asc' | 'desc';
    orderby: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'title';
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    categories: number[];
    categories_exclude: number[];
    tags: number[];
    tags_exclude: number[];
    sticky: boolean;
};
declare type UseCreatePost = {
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
    meta: object;
    sticky: boolean;
    template: string;
    categories: number[];
    tags: number[];
};
declare type UseRetrivePost = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
    password: string;
};
declare type UseUpdatePost = {
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
    meta: object;
    sticky: boolean;
    template: string;
    categories: number[];
    tags: number[];
};
declare type UseDeletePost = {
    force: boolean;
};
export declare const usePosts: (options?: number | number[] | UsePosts | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePost: (options: UseCreatePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrivePost: (options: UseRetrivePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdatePost: (options: UseUpdatePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePost: (id: number, options?: UseDeletePost | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
