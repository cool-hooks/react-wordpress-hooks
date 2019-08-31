declare type UseTypes = {
    context?: 'view' | 'embed' | 'edit';
};
declare type UseRetrieveType = {
    type?: string;
    context?: 'view' | 'embed' | 'edit';
};
export declare const useTypes: (options: UseTypes) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveType: (options: UseRetrieveType) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
