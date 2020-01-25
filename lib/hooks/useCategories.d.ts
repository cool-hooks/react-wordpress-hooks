declare type UseCategories = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    readonly hide_empty?: boolean;
    readonly parent?: number;
    readonly post?: number;
    readonly slug?: string[];
};
declare type UseCreateCategory = {
    readonly description?: string;
    readonly name: string;
    readonly slug?: string;
    readonly parent?: number;
    readonly meta?: object;
};
declare type UseRetrieveCategory = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateCategory = {
    readonly id?: number;
    readonly description?: string;
    readonly name?: string;
    readonly slug?: string;
    readonly parent?: number;
    readonly meta?: object;
};
declare type UseDeleteCategory = {
    readonly force?: boolean;
};
export declare const useCategories: (options?: number | number[] | UseCategories | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateCategory: (options: UseCreateCategory) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveCategory: (options: UseRetrieveCategory) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateCategory: (options: UseUpdateCategory) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteCategory: (id: number, options?: UseDeleteCategory | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
