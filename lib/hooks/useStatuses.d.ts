declare type UseStatuses = {
    context?: 'view' | 'embed' | 'edit';
};
declare type UseRetrieveStatus = {
    status?: string;
    context?: 'view' | 'embed' | 'edit';
};
export declare const useStatuses: (options: UseStatuses) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveStatus: (options: UseRetrieveStatus) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
