declare type UseBlocks = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly after?: string;
    readonly before?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    readonly slug?: string[];
    readonly status?: ['publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'any'];
};
declare type UseCreateBlock = {
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly title?: object;
    readonly content?: object;
    readonly template?: string;
};
declare type UseRetrieveBlock = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly password?: string;
};
declare type UseUpdateBlock = {
    readonly id?: number;
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly title?: object;
    readonly content?: object;
    readonly template?: string;
};
declare type UseDeleteBlock = {
    readonly force?: boolean;
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
