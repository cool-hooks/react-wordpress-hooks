declare type UseComments = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly after?: string;
    readonly author?: number[];
    readonly author_exclude?: number[];
    readonly author_email?: string;
    readonly before?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
    readonly parent?: number[];
    readonly parent_exclude?: number[];
    readonly post?: number[];
    readonly status?: string;
    readonly type?: string;
    readonly password?: string;
};
declare type UseCreateComment = {
    readonly author?: number;
    readonly author_email?: string;
    readonly author_ip?: string;
    readonly author_name?: string;
    readonly author_url?: string;
    readonly author_user_agent?: string;
    readonly content?: object;
    readonly date?: string;
    readonly date_gmt?: string;
    readonly parent?: number;
    readonly post?: number;
    readonly status?: string;
    readonly meta?: object;
};
declare type UseRetrieveComment = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly password?: string;
};
declare type UseUpdateComment = {
    readonly id?: number;
    readonly author?: number;
    readonly author_email?: string;
    readonly author_ip?: string;
    readonly author_name?: string;
    readonly author_url?: string;
    readonly author_user_agent?: string;
    readonly content?: object;
    readonly date?: string;
    readonly date_gmt?: string;
    readonly parent?: number;
    readonly post?: number;
    readonly status?: string;
    readonly meta?: object;
};
declare type UseDeleteComment = {
    readonly force?: boolean;
    readonly password?: string;
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
export declare const useRetrieveComment: (options: UseRetrieveComment) => {
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
