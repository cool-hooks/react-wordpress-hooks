declare type UseUpdateSettings = {
    title: string;
    description: string;
    timezone: string;
    date_format: string;
    time_format: string;
    start_of_week: number;
    language: string;
    use_smilies: boolean;
    default_category: number;
    default_post_format: string;
    posts_per_page: number;
    default_ping_status: 'open' | 'closed';
    default_comment_status: 'open' | 'closed';
};
export declare const useSettings: () => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateSetting: (options: UseUpdateSettings) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
