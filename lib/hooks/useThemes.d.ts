declare type UseThemes = {
    readonly context?: string;
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly status: ['active'];
};
export declare const useThemes: (options?: UseThemes | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
