import { useApiRequest } from './useApiRequest';

type UsePostRevisions = {
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

type UseCreatePostRevision = {
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

type UseRetrievePostRevision = {
  parent?: number;
  id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type UseDeletePostRevision = {
  parent?: number;
  force?: boolean;
};

const endpoint = 'posts';

export const usePostRevisions = (
  parent: number,
  options?: UsePostRevisions
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/revisions`
  });

  return { data, loading, error };
};

export const useCreatePostRevision = (
  parent: number,
  options: UseCreatePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves`,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrievePostRevision = (
  parent: number,
  type: 'revisions' | 'autosaves',
  options: UseRetrievePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/${type}`
  });

  return { data, loading, error };
};

export const useDeletePostRevision = (
  parent: number,
  id: number,
  options?: UseDeletePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
