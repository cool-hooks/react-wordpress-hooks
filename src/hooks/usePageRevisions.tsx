import { useApiRequest } from './useApiRequest';

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
  parent?: number;
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  title?: object;
  content?: object;
  author?: number;
  excerpt?: object;
  featured_media?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  meta?: object;
  sticky?: boolean;
  template?: string;
  categories?: number[];
  tags?: number[];
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

export const useCreatePostRevision = (
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
