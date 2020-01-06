declare type UseRetrieveBlockRenderer = {
    name?: string;
    context?: 'view' | 'edit';
    attributes?: object;
    post_id?: number;
};
export declare const useRetrieveBlockRenderer: (options: UseRetrieveBlockRenderer) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
