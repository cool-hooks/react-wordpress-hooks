import { useApiRequest } from './useApiRequest';

type UseTags = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: number;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  hide_empty?: boolean;
  post?: number;
  slug?: string[];
};

type UseCreateTag = {
  description?: string;
  name: string;
  slug?: string;
  meta?: object;
};

type UseRetrieveTag = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type UseUpdateTag = {
  readonly id?: number;
  description?: string;
  name?: string;
  slug?: string;
  meta?: object;
};

type UseDeleteTag = {
  force?: boolean;
};

const endpoint = 'tags';

export const useTags = (options?: UseTags | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateTag = (options: UseCreateTag) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveTag = (options: UseRetrieveTag) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateTag = (options: UseUpdateTag) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteTag = (id: number, options?: UseDeleteTag) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
