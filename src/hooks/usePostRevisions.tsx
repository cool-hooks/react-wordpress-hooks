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

type RetrievePostRevision = {
  parent?: number;
  id?: number;
  context?: 'view' | 'embed' | 'edit';
};

type DeletePostRevision = {
  parent?: number;
  force?: boolean;
};

const endpoint = 'revisions';

export const usePostRevisions = (options: UsePostRevisions) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};

export const useRetrievePostRevision = (options: RetrievePostRevision) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useDeletePostRevision = (
  id: number,
  options?: DeletePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
