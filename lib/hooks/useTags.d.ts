declare type UseTags = {
    context: 'view' | 'embed' | 'edit';
    page: number;
    per_page: number;
    search: number;
    exclude: number[];
    include: number[];
    offset: number;
    order: 'asc' | 'desc';
    hide_empty: boolean;
    post: number;
    slug: string;
};
declare type UseCreateTag = {
    description: string;
    name: string;
    slug: string;
    meta: object;
};
declare type UseRetriveTag = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
};
declare type UseUpdateTag = {
    readonly id: number;
    description: string;
    name: string;
    slug: string;
    meta: object;
};
declare type UseDeleteTag = {
    force: boolean;
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
export declare const useRetriveTag: (options: UseRetriveTag) => {
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
