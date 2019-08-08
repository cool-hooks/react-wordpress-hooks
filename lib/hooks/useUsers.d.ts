declare type UseUsers = {
    context: 'view' | 'embed' | 'edit';
    page: number;
    per_page: number;
    search: string;
    exclude: number[];
    include: number[];
    offset: number;
    order: 'asc' | 'desc';
    orderby: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'email' | 'url';
    slug: string;
    roles: string[];
};
declare type UseCreateUser = {
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    url: string;
    description: string;
    locale: string;
    nickname: string;
    slug: string;
    roles: string[];
    password: string;
    meta: object;
};
declare type UseRetriveUser = {
    readonly id: number;
    context: 'view' | 'embed' | 'edit';
};
declare type UseUpdateUser = {
    readonly id: number;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    url: string;
    description: string;
    locale: string;
    nickname: string;
    slug: string;
    roles: string[];
    password: string;
    meta: object;
};
declare type UseDeleteUser = {
    force: boolean;
    reassign: number;
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
export declare const useRetriveUser: (options: UseRetriveUser) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useUpdateUser: (options: UseUpdateUser) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteUser: (id: number, options?: UseDeleteUser | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
