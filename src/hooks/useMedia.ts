import { useApiRequest } from './useApiRequest';

type UseMedia = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly after?: string;
  readonly author?: number[];
  readonly author_exclude?: number[];
  readonly before?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
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
  readonly parent?: number[];
  readonly parent_exclude?: number[];
  readonly slug?: string[];
  readonly status?: ['inherit' | 'private' | 'trash'];
  readonly media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
  readonly mime_type?: string;
};

type UseCreateMedia = {
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly title?: object;
  readonly author?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly meta?: object;
  readonly template?: string;
  readonly alt_text?: string;
  readonly caption?: object;
  readonly description?: object;
  readonly post?: number;
};

type UseRetrieveMedia = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseUpdateMedia = {
  readonly id?: number;
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly title?: object;
  readonly author?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly meta?: object;
  readonly template?: string;
  readonly alt_text?: string;
  readonly caption?: object;
  readonly description?: object;
  readonly post?: number;
};

type UseDeleteMedia = {
  readonly force?: boolean;
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
    requsetMethod: 'post',
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
    requsetMethod: 'post',
  });

  return { data, loading, error };
};

export const useDeleteMedia = (id: number, options?: UseDeleteMedia) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });

  return { data, loading, error };
};
