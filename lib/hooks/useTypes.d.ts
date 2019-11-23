declare type UseRetrieveTypes = {
    context?: 'view' | 'embed' | 'edit';
};
declare type UseRetrieveType = {
    context?: 'view' | 'embed' | 'edit';
};
export declare const useRetrieveTypes: (options: UseRetrieveTypes) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveType: (type: string, options: UseRetrieveType) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
