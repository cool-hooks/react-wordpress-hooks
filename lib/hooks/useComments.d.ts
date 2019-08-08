declare type UseComments = {
    context: 'view' | 'embed' | 'edit';
    page: number;
    per_page: number;
    search: number;
    after: string;
    author: number;
    author_exclude: number[];
    author_email: string;
    before: string;
    exclude: number[];
    include: number[];
    offset: number;
    order: 'asc' | 'desc';
    orderby: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
    parent: number;
    parent_exclude: number[];
    post: number[];
    status: string;
    readonly type: 'view' | 'edit' | 'embed';
    password: string;
};
declare type UseCreateComment = {
    author: number;
    author_email: string;
    author_ip: string;
    author_name: string;
    author_url: string;
    author_user_agent: string;
    content: string;
    date: string;
    date_gmt: string;
    parent: number;
    post: number;
    status: string;
    meta: object;
};
declare type UseRetriveComment = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
    password: string;
};
declare type UseUpdateComment = {
    readonly id: number;
    author: number;
    author_email: string;
    author_ip: string;
    author_name: string;
    author_url: string;
    author_user_agent: string;
    content: string;
    date: string;
    date_gmt: string;
    parent: number;
    post: number;
    status: string;
    meta: object;
};
declare type UseDeleteComment = {
    force: boolean;
    password: string;
};
export declare const useComments: (options?: number | number[] | UseComments | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateComment: (options: UseCreateComment) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetriveComment: (options: UseRetriveComment) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateComment: (options: UseUpdateComment) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteComment: (id: number, options?: UseDeleteComment | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
