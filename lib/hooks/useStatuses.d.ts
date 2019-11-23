declare type UseRetrieveStatuses = {
    context?: 'view' | 'embed' | 'edit';
};
declare type UseRetrieveStatus = {
    status?: string;
    context?: 'view' | 'embed' | 'edit';
};
export declare const useRetrieveStatuses: (options: UseRetrieveStatuses) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveStatus: (status: string, options: UseRetrieveStatus) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
