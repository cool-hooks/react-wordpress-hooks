import { useApiRequest } from './useApiRequest';

type UseCategories = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly exclude?: number[];
  readonly include?: number[];
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
  readonly parent?: number;
  readonly post?: number;
  readonly slug?: string[];
};

type UseCreateCategory = {
  readonly description?: string;
  readonly name: string;
  readonly slug?: string;
  readonly parent?: number;
  readonly meta?: object;
};

type UseRetrieveCategory = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseUpdateCategory = {
  readonly id?: number;
  readonly description?: string;
  readonly name?: string;
  readonly slug?: string;
  readonly parent?: number;
  readonly meta?: object;
};

type UseDeleteCategory = {
  readonly force?: boolean;
};

const endpoint = 'categories';

export const useCategories = (options?: UseCategories | number | number[]) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint
  });

  return { data, loading, error };
};

export const useCreateCategory = (options: UseCreateCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveCategory = (options: UseRetrieveCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint
  });

  return { data, loading, error };
};

export const useUpdateCategory = (options: UseUpdateCategory) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteCategory = (id: number, options?: UseDeleteCategory) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
