declare type UsePageRevisions = {
    readonly parent?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
};
declare type UseCreatePageRevision = {
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
declare type UseRetrievePageRevision = {
    readonly parent?: number;
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseDeletePageRevision = {
    readonly parent?: number;
    readonly force?: boolean;
};
export declare const usePageRevisions: (parent: number, options?: UsePageRevisions | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePageRevision: (parent: number, options: UseCreatePageRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePageRevision: (parent: number, type: "revisions" | "autosaves", options: UseRetrievePageRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePageRevision: (parent: number, id: number, options?: UseDeletePageRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
