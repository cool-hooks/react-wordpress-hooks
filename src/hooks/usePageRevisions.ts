import { useApiRequest } from './useApiRequest';

// TODO check hooks

type UsePageRevisions = {
  parent?: number;
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
};

type UseCreatePageRevision = {
  date?: string | null;
  date_gmt?: string | null;
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

type UseRetrievePageRevision = {
  parent?: number;
  id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type UseDeletePageRevision = {
  parent?: number;
  force?: boolean;
};

const endpoint = 'pages';

export const usePageRevisions = (
  parent: number,
  options?: UsePageRevisions
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/revisions`
  });

  return { data, loading, error };
};

export const useCreatePageRevision = (
  parent: number,
  options: UseCreatePageRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves`,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrievePageRevision = (
  parent: number,
  type: 'revisions' | 'autosaves',
  options: UseRetrievePageRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/${type}`
  });

  return { data, loading, error };
};

export const useDeletePageRevision = (
  parent: number,
  id: number,
  options?: UseDeletePageRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
