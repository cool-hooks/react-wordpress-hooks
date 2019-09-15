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

const endpoints = ['posts', 'revisions'];

export const usePostRevisions = (
  parent: number,
  options?: UsePostRevisions
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoints[0]}/${parent}/${endpoints[1]}`
  });

  return { data, loading, error };
};

export const useRetrievePostRevision = (
  parent: number,
  options: RetrievePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoints[0]}/${parent}/${endpoints[1]}`
  });

  return { data, loading, error };
};

export const useDeletePostRevision = (
  parent: number,
  id: number,
  options?: DeletePostRevision
) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint: `${endpoints[0]}/${parent}/${endpoints[1]}`,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
