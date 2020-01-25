declare type UsePosts = {
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
    readonly slug?: string[];
    readonly status?: ['publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'any'];
    readonly categories?: number[];
    readonly categories_exclude?: number[];
    readonly tags?: number[];
    readonly tags_exclude?: number[];
    readonly sticky?: boolean;
};
declare type UseCreatePost = {
    readonly date?: string;
    readonly date_gmt?: string;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly title?: object;
    readonly content?: object;
    readonly author?: number;
    readonly excerpt?: object;
    readonly featured_media?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    readonly meta?: object;
    readonly sticky?: boolean;
    readonly template?: string;
    readonly categories?: number[];
    readonly tags?: number[];
};
declare type UseRetrievePost = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly password?: string;
};
declare type UseUpdatePost = {
    readonly id?: number;
    readonly date?: string;
    readonly date_gmt?: string;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly title?: object;
    readonly content?: object;
    readonly author?: number;
    readonly excerpt?: object;
    readonly featured_media?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    readonly meta?: object;
    readonly sticky?: boolean;
    readonly template?: string;
    readonly categories?: number[];
    readonly tags?: number[];
};
declare type UseDeletePost = {
    readonly force?: boolean;
};
export declare const usePosts: (options?: number | number[] | UsePosts | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePost: (options: UseCreatePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePost: (options: UseRetrievePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdatePost: (options: UseUpdatePost) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePost: (id: number, options?: UseDeletePost | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
