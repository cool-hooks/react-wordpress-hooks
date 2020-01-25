declare type UseSearch = {
    readonly context?: 'view' | 'embed';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly type?: 'post';
    readonly subtype?: ['post' | 'page' | 'any'];
};
export declare const useSearch: (options?: UseSearch | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
