import { useApiRequest } from './useApiRequest';

type UseRevisions = {
  parent: number;
  context: 'view' | 'embed' | 'edit';
};

type RetriveRevision = {
  parent: number;
  id: number;
  context: 'view' | 'embed' | 'edit';
};

type DeleteRevision = {
  parent: number;
  id: number;
  force: boolean;
};

const endpoint = 'revisions';

export const useRevisions = (options: UseRevisions) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};

export const useRetriveRevision = (options: RetriveRevision) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useDeleteRevision = (options: DeleteRevision) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'delete'
  });

  return { data, loading, error };
};
