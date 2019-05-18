import { useApiRequest } from './useApiRequest';

type UseUsers = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: string;
  exclude: number[];
  include: number[];
  offset: number;
  order: 'asc' | 'desc';
  orderby:
    | 'id'
    | 'include'
    | 'name'
    | 'registered_date'
    | 'slug'
    | 'email'
    | 'url';
  slug: string;
  roles: any;
};

type UseCreateUser = {
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
  roles: object;
  password: string;
  meta: object;
};

type UseRetriveUser = {
  id: number;
  context: 'view' | 'embed' | 'edit';
};

type UseUpdateUser = {
  id: number;
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
  roles: object;
  password: string;
  meta: object;
};

type UseDeleteUser = {
  id: number;
  force: boolean;
  reassign: number;
};

const endpoint = 'users';

export const useUsers = (options: UseUsers) => {
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

export const useRetriveUser = (options: UseRetriveUser) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateUser = (options: UseUpdateUser) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useDeleteUser = (options: UseDeleteUser) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
