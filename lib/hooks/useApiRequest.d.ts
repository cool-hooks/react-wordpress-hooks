export declare const useApiRequest: ({ id, options, requsetMethod, endpoint }: {
    readonly id?: string | number | undefined;
    readonly options?: number | object | undefined;
    readonly requsetMethod?: string | undefined;
    readonly endpoint?: string | undefined;
}) => {
    loading: boolean;
    error: string | object | null;
    data: object[];
};
