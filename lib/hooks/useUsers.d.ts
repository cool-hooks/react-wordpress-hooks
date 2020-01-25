declare type UseUsers = {
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'include_slugs' | 'email' | 'url';
    readonly slug?: string[];
    readonly roles?: string[];
    readonly who?: ['authors'];
};
declare type UseCreateUser = {
    readonly username: string;
    readonly name?: string;
    readonly first_name?: string;
    readonly last_name?: string;
    readonly email: string;
    readonly url?: string;
    readonly description?: string;
    readonly locale?: string;
    readonly nickname?: string;
    readonly slug?: string;
    readonly roles?: string[];
    readonly password?: string;
    readonly meta?: object;
};
declare type UseRetrieveUser = {
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseUpdateUser = {
    readonly id?: number;
    readonly username?: string;
    readonly name?: string;
    readonly first_name?: string;
    readonly last_name?: string;
    readonly email?: string;
    readonly url?: string;
    readonly description?: string;
    readonly locale?: string;
    readonly nickname?: string;
    readonly slug?: string;
    readonly roles?: string[];
    readonly password?: string;
    readonly meta?: object;
};
declare type UseDeleteUser = {
    readonly force?: boolean;
    readonly reassign: number;
};
export declare const useUsers: (options?: number | number[] | UseUsers | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreateUser: (options: UseCreateUser) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveUser: (id: string, options: UseRetrieveUser) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateUser: (id: string, options: UseUpdateUser) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteUser: (id: string, options?: UseDeleteUser | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
