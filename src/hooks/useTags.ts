import { useApiRequest } from './useApiRequest';

type UseTags = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: number;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  readonly hide_empty?: boolean;
  readonly post?: number;
  readonly slug?: string[];
};

type UseCreateTag = {
  readonly description?: string;
  readonly name: string;
  readonly slug?: string;
  readonly meta?: object;
};

type UseRetrieveTag = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseUpdateTag = {
  readonly id?: number;
  readonly description?: string;
  readonly name?: string;
  readonly slug?: string;
  readonly meta?: object;
};

type UseDeleteTag = {
  readonly force?: boolean;
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
    requsetMethod: 'post',
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
    requsetMethod: 'post',
  });

  return { data, loading, error };
};

export const useDeleteTag = (id: number, options?: UseDeleteTag) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });

  return { data, loading, error };
};
