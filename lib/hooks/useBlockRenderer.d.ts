declare type UseRetrieveBlockRenderer = {
    context?: 'view' | 'edit';
    attributes?: object;
    post_id?: number;
};
export declare const useRetrieveBlockRenderer: (name: string, options: UseRetrieveBlockRenderer) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
