import { useApiRequest } from './useApiRequest';

type UseUsers = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'registered_date'
    | 'slug'
    | 'include_slugs'
    | 'email'
    | 'url';
  readonly slug?: string[];
  readonly roles?: string[];
  readonly who?: ['authors'];
};

type UseCreateUser = {
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

type UseRetrieveUser = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseUpdateUser = {
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

type UseDeleteUser = {
  readonly force?: boolean;
  readonly reassign: number;
};

const endpoint = 'users';

export const useUsers = (options?: UseUsers | number | number[]) => {
  return useApiRequest({ options, endpoint });
};

export const useCreateUser = (options: UseCreateUser) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useRetrieveUser = (id: string, options: UseRetrieveUser) => {
  return useApiRequest({ id, options, endpoint });
};

export const useUpdateUser = (id: string, options: UseUpdateUser) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useDeleteUser = (id: string, options?: UseDeleteUser) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });
};
