declare type UseMedia = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly after?: string;
    readonly author?: number[];
    readonly author_exclude?: number[];
    readonly before?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    readonly parent?: number[];
    readonly parent_exclude?: number[];
    readonly slug?: string[];
    readonly status?: ['inherit' | 'private' | 'trash'];
    readonly media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
    readonly mime_type?: string;
};
declare type UseCreateMedia = {
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly title?: object;
    readonly author?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly meta?: object;
    readonly template?: string;
    readonly alt_text?: string;
    readonly caption?: object;
    readonly description?: object;
    readonly post?: number;
};
declare type UseRetrieveMedia = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateMedia = {
    readonly id?: number;
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly title?: object;
    readonly author?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly meta?: object;
    readonly template?: string;
    readonly alt_text?: string;
    readonly caption?: object;
    readonly description?: object;
    readonly post?: number;
};
declare type UseDeleteMedia = {
    readonly force?: boolean;
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
export declare const useRetrieveMedia: (options: UseRetrieveMedia) => {
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
