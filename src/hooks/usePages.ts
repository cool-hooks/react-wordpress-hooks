import { useApiRequest } from './useApiRequest';

type UsePages = {
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
  menu_order?: number;
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
    | 'title'
    | 'menu_order';
  parent?: number[];
  parent_exclude?: number[];
  slug?: string[];
  status?:
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
    | 'any';
};

type UseCreatePage = {
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  parent?: number;
  title?: object;
  content?: object;
  author?: number;
  excerpt?: object;
  featured_media?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  menu_order?: number;
  meta?: object;
  template?: string;
};

type UseRetrievePage = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
  password?: string;
};

type UseUpdatePage = {
  readonly id?: number;
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  parent?: number;
  title?: object;
  content?: object;
  author?: number;
  excerpt?: object;
  featured_media?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  menu_order?: number;
  meta?: object;
  template?: string;
};

type UseDeletePage = {
  force?: boolean;
};

const endpoint = 'pages';

export const usePages = (options?: UsePages | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreatePage = (options: UseCreatePage) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrievePage = (options: UseRetrievePage) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdatePage = (options: UseUpdatePage) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeletePage = (id: number, options?: UseDeletePage) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
