import { useApiRequest } from './useApiRequest';

type UsePosts = {
  context: 'view' | 'embed' | 'edit';
  page: number;
  per_page: number;
  search: number;
  after: string;
  author: number;
  author_exclude: number[];
  before: string;
  exclude: number[];
  include: number[];
  offset: number;
  order: 'asc' | 'desc';
  orderby:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title';
  slug: string;
  status: string;
  categories: number[];
  categories_exclude: number[];
  tags: number[];
  tags_exclude: number[];
  sticky: boolean;
};

type UseCreatePost = {
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password: string;
  parent: number;
  title: string;
  content: string;
  author: number;
  excerpt: string;
  featured_media: number;
  comment_status: 'open' | 'close';
  ping_status: 'open' | 'close';
  meta: object;
  sticky: boolean;
  template: any;
  categories: number[];
  tags: number[];
};

type UseRetrivePost = {
  id: number;
  context: 'view' | 'embed' | 'edit';
  password: string;
};

type UseUpdatePost = {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password: string;
  parent: number;
  title: string;
  content: string;
  author: number;
  excerpt: string;
  featured_media: number;
  comment_status: 'open' | 'close';
  ping_status: 'open' | 'close';
  meta: object;
  sticky: boolean;
  template: any;
  categories: number[];
  tags: number[];
};

type UseDeletePost = {
  id: number;
  force: boolean;
};

const endpoint = 'posts';

export const usePosts = (options: UsePosts) => {
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

export const useRetrivePost = (options: UseRetrivePost) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdatePost = (options: UseUpdatePost) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useDeletePost = (options: UseDeletePost) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
