import { useApiRequest } from './useApiRequest';

type UseTypes = {
  context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveType = {
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'types';

export const useTypes = (options: UseTypes) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveType = (options: UseRetrieveType) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
