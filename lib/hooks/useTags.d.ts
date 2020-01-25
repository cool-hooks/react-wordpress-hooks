declare type UseTags = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: number;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    readonly hide_empty?: boolean;
    readonly post?: number;
    readonly slug?: string[];
};
declare type UseCreateTag = {
    readonly description?: string;
    readonly name: string;
    readonly slug?: string;
    readonly meta?: object;
};
declare type UseRetrieveTag = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateTag = {
    readonly id?: number;
    readonly description?: string;
    readonly name?: string;
    readonly slug?: string;
    readonly meta?: object;
};
declare type UseDeleteTag = {
    readonly force?: boolean;
};
export declare const useTags: (options?: number | number[] | UseTags | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateTag: (options: UseCreateTag) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveTag: (options: UseRetrieveTag) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateTag: (options: UseUpdateTag) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteTag: (id: number, options?: UseDeleteTag | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
