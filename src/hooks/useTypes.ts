import { useApiRequest } from './useApiRequest';

type UseRetrieveTypes = {
  context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveType = {
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'types';

export const useRetrieveTypes = (options: UseRetrieveTypes) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveType = (type: string, options: UseRetrieveType) => {
  const { data, loading, error } = useApiRequest({
    id: type,
    options,
    endpoint
  });

  return { data, loading, error };
};
