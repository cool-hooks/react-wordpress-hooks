export declare const useApiRequest: ({ id, options, requsetMethod, endpoint }: {
    id?: number | undefined;
    options?: number | object | undefined;
    requsetMethod?: string | undefined;
    endpoint?: string | undefined;
}) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
