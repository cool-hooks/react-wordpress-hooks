declare type UseStatuses = {
    context: 'view' | 'embed' | 'edit';
};
declare type UseRetriveStatus = {
    context: 'view' | 'embed' | 'edit';
};
export declare const useStatuses: (options: UseStatuses) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetriveStatus: (options: UseRetriveStatus) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
