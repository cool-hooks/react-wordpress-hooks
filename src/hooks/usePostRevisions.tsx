import { useApiRequest } from './useApiRequest';

type UsePostRevisions = {
  parent: number;
  context: 'view' | 'embed' | 'edit';
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
