import { useApiRequest } from './useApiRequest';

type UsePageRevisions = {
  readonly parent?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
};

type UseCreatePageRevision = {
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly parent?: number;
  readonly title?: object;
  readonly content?: object;
  readonly author?: number;
  readonly excerpt?: object;
  readonly featured_media?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly menu_order?: number;
  readonly meta?: object;
  readonly template?: string;
};

type UseRetrievePageRevision = {
  readonly parent?: number;
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseDeletePageRevision = {
  readonly parent?: number;
  readonly force?: boolean;
};

const endpoint = 'pages';

export const usePageRevisions = (
  parent: number,
  options?: UsePageRevisions
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
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
    requsetMethod: 'post',
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
    endpoint: `${endpoint}/${parent}/${type}`,
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
    requsetMethod: 'delete',
  });

  return { data, loading, error };
};
