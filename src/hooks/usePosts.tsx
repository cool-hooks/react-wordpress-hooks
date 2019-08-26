import { useApiRequest } from './useApiRequest';

type UsePosts = {
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
  categories?: number[];
  categories_exclude?: number[];
  tags?: number[];
  tags_exclude?: number[];
  sticky?: boolean;
};

type UseCreatePost = {
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  // parent: number;
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

type UseRetrievePost = {
  readonly id?: number;
  context?: 'view' | 'embed' | 'edit';
  password?: string;
};

type UseUpdatePost = {
  readonly id?: number;
  date?: string;
  date_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  // parent: number;
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

type UseDeletePost = {
  force?: boolean;
};

const endpoint = 'posts';

export const usePosts = (options?: UsePosts | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreatePost = (options: UseCreatePost) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrievePost = (options: UseRetrievePost) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdatePost = (options: UseUpdatePost) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useDeletePost = (id: number, options?: UseDeletePost) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
