declare type UseTypes = {
    context: 'view' | 'embed' | 'edit';
};
declare type UseRetriveType = {
    context: 'view' | 'embed' | 'edit';
};
export declare const useTypes: (options: UseTypes) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetriveType: (options: UseRetriveType) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
