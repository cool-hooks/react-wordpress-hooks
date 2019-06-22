import { useApiRequest } from './useApiRequest';

type UseMedia = {
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
  parent: number;
  parent_exclude: number[];
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly media_type: 'image' | 'video' | 'audio' | 'application';
  readonly mime_type: string;
};

type UseCreateMedia = {
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  title: string;
  author: string;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  meta: string;
  template: string;
  alt_text: string;
  caption: string;
  description: string;
  post: number;
};

type UseRetriveMedia = {
  readonly id: number;
  context: 'view' | 'embed' | 'edit';
};

type UseUpdateMedia = {
  readonly id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  title: string;
  author: string;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  meta: string;
  template: string;
  alt_text: string;
  caption: string;
  description: string;
  post: number;
};

type UseDeleteMedia = {
  readonly id: number;
  force: boolean;
};

const endpoint = 'media';

export const useMedia = (options: UseMedia) => {
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

export const useRetriveMedia = (options: UseRetriveMedia) => {
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

export const useDeleteMedia = (options: UseDeleteMedia) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
