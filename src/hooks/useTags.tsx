import { useApiRequest } from './useApiRequest';

type UseTags = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: number;
  exclude: number[];
  include: number[];
  offset: number;
  order: 'asc' | 'desc';
  hide_empty: boolean;
  post: number;
  slug: string;
};

type UseCreateTag = {
  description: string;
  name: string;
  slug: string;
  meta: object;
};

type UseRetriveTag = {
  id: number;
  context: 'view' | 'embed' | 'edit';
};

type UseUpdateTag = {
  id: number;
  description: string;
  name: string;
  slug: string;
  meta: object;
};

type UseDeleteTag = {
  id: number;
  force: boolean;
};

const endpoint = 'tags';

export const useTags = (options: UseTags) => {
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

export const useRetriveTag = (options: UseRetriveTag) => {
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

export const useDeleteTag = (options: UseDeleteTag) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
