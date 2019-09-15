declare type UseSearch = {
    context?: 'view' | 'embed';
    page?: number;
    per_page?: number;
    search?: string;
    type?: 'post';
    subtype?: ['post' | 'page' | 'any'];
};
export declare const useSearch: (options?: UseSearch | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
