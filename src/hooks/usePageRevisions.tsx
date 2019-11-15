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

type CreatePageRevision = {};

type RetrievePageRevision = {
  parent?: number;
  id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type DeletePageRevision = {
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
  options: CreatePageRevision
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
  options: RetrievePageRevision
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
  options?: DeletePageRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
