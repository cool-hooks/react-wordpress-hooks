declare type UseMedia = {
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
    parent: number;
    parent_exclude: number[];
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly media_type: 'image' | 'video' | 'audio' | 'application';
    readonly mime_type: string;
};
declare type UseCreateMedia = {
    date: string;
    date_gmt: string;
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    title: string;
    author: string;
    comment_status: 'open' | 'closed';
    ping_status: 'open' | 'closed';
    meta: string;
    template: string;
    alt_text: string;
    caption: string;
    description: string;
    post: number;
};
declare type UseRetriveMedia = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
};
declare type UseUpdateMedia = {
    readonly id: number;
    date: string;
    date_gmt: string;
    slug: string;
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    title: string;
    author: string;
    comment_status: 'open' | 'closed';
    ping_status: 'open' | 'closed';
    meta: string;
    template: string;
    alt_text: string;
    caption: string;
    description: string;
    post: number;
};
declare type UseDeleteMedia = {
    force: boolean;
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
export declare const useRetriveMedia: (options: UseRetriveMedia) => {
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
