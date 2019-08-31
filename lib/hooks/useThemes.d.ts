declare type UseThemes = {
    context?: string;
    page?: number;
    per_page?: number;
    search?: string;
    status: ['active'];
};
export declare const useThemes: (options?: UseThemes | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
