declare type UsePages = {
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
    readonly menu_order?: number;
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
    readonly parent?: number[];
    readonly parent_exclude?: number[];
    readonly slug?: string[];
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'any';
};
declare type UseCreatePage = {
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly parent?: number;
    readonly title?: object;
    readonly content?: object;
    readonly author?: number;
    readonly excerpt?: object;
    readonly featured_media?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly menu_order?: number;
    readonly meta?: object;
    readonly template?: string;
};
declare type UseRetrievePage = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly password?: string;
};
declare type UseUpdatePage = {
    readonly id?: number;
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly parent?: number;
    readonly title?: object;
    readonly content?: object;
    readonly author?: number;
    readonly excerpt?: object;
    readonly featured_media?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly menu_order?: number;
    readonly meta?: object;
    readonly template?: string;
};
declare type UseDeletePage = {
    readonly force?: boolean;
};
export declare const usePages: (options?: number | number[] | UsePages | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePage: (options: UseCreatePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePage: (options: UseRetrievePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdatePage: (options: UseUpdatePage) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePage: (id: number, options?: UseDeletePage | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
