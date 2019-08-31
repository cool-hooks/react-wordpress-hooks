declare type UseCategories = {
    context?: 'view' | 'embed' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    exclude?: number[];
    include?: number[];
    order?: 'asc' | 'desc';
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    hide_empty?: boolean;
    parent?: number;
    post?: number;
    slug?: string[];
};
declare type UseCreateCategory = {
    description?: string;
    name: string;
    slug?: string;
    parent?: number;
    meta?: object;
};
declare type UseRetrieveCategory = {
    readonly id?: number;
    context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateCategory = {
    readonly id?: number;
    description?: string;
    name?: string;
    slug?: string;
    parent?: number;
    meta?: object;
};
declare type UseDeleteCategory = {
    force?: boolean;
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
