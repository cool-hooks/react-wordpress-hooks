import { useApiRequest } from './useApiRequest';

type UseMedia = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  author?: number[];
  author_exclude?: number[];
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
  parent?: number[];
  parent_exclude?: number[];
  slug?: string[];
  status?: ['inherit' | 'private' | 'trash'];
  readonly media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
  readonly mime_type?: string;
};

type UseCreateMedia = {
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  title?: object;
  author?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  meta?: object;
  template?: string;
  alt_text?: string;
  caption?: object;
  description?: object;
  post?: number;
};

type UseRetrieveMedia = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type UseUpdateMedia = {
  readonly id?: number;
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  title?: object;
  author?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  meta?: object;
  template?: string;
  alt_text?: string;
  caption?: object;
  description?: object;
  post?: number;
};

type UseDeleteMedia = {
  force?: boolean;
};

const endpoint = 'media';

export const useMedia = (options?: UseMedia | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateMedia = (options: UseCreateMedia) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveMedia = (options: UseRetrieveMedia) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateMedia = (options: UseUpdateMedia) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeleteMedia = (id: number, options?: UseDeleteMedia) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
