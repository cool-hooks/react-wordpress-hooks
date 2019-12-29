import { useApiRequest } from './useApiRequest';

type UseUsers = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'registered_date'
    | 'slug'
    | 'include_slugs'
    | 'email'
    | 'url';
  slug?: string[];
  roles?: string[];
  who?: ['authors'];
};

type UseCreateUser = {
  username: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  url?: string;
  description?: string;
  locale?: string;
  nickname?: string;
  slug?: string;
  roles?: string[];
  password?: string;
  meta?: object;
};

type UseRetrieveUser = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type UseUpdateUser = {
  readonly id?: number;
  username?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  url?: string;
  description?: string;
  locale?: string;
  nickname?: string;
  slug?: string;
  roles?: string[];
  password?: string;
  meta?: object;
};

type UseDeleteUser = {
  force?: boolean;
  reassign: number;
};

const endpoint = 'users';

export const useUsers = (options?: UseUsers | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateUser = (options: UseCreateUser) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveUser = (
  id: string = 'me', // TODO fix
  options: UseRetrieveUser
) => {
  const { data, loading, error } = useApiRequest({ id, options, endpoint });

  return { data, loading, error };
};

export const useUpdateUser = (id: string = 'me', options: UseUpdateUser) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteUser = (id: string = 'me', options?: UseDeleteUser) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
