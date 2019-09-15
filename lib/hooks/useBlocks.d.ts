declare type UseBlocks = {
    context?: 'view' | 'embed' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    after?: string;
    before?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    slug?: string[];
    status?: ['publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'any'];
};
declare type UseCreateBlock = {
    date?: string;
    date_gmt?: string;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password?: string;
    title?: object;
    content?: object;
    template?: string;
};
declare type UseRetrieveBlock = {
    readonly id?: number;
    context?: 'view' | 'embed' | 'edit';
    password?: string;
};
declare type UseUpdateBlock = {
    readonly id?: number;
    date?: string;
    date_gmt?: string;
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password?: string;
    title?: object;
    content?: object;
    template?: string;
};
declare type UseDeleteBlock = {
    force?: boolean;
};
export declare const useBlocks: (options?: UseBlocks | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateBlock: (options: UseCreateBlock) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveBlock: (options: UseRetrieveBlock) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateBlock: (options: UseUpdateBlock) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteBlock: (id: number, options?: UseDeleteBlock | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
