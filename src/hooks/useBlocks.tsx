import { useApiRequest } from './useApiRequest';

type UseBlocks = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  before?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  slug?: string[];
  status?: [

      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'trash'
      | 'auto-draft'
      | 'inherit'
      | 'request-pending'
      | 'request-confirmed'
      | 'request-failed'
      | 'request-completed'
      | 'any'
  ];
};

type UseCreateBlock = {
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: string;
  password?: string;
  title?: object;
  content?: object;
  template?: string;
};

type UseRetrieveBlock = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
  password?: string;
};

type UseUpdateBlock = {
  readonly id?: number;
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  title?: object;
  content?: object;
  template?: string;
};

type UseDeleteBlock = {
  force?: boolean;
};

const endpoint = 'blocks';

export const useBlocks = (options?: UseBlocks) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateBlock = (options: UseCreateBlock) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveBlock = (options: UseRetrieveBlock) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateBlock = (options: UseUpdateBlock) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteBlock = (id: number, options?: UseDeleteBlock) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
