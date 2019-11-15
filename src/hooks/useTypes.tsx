import { useApiRequest } from './useApiRequest';

type UseRetrieveTypes = {
  context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveType = {
  type?: string;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'types';

export const useRetrieveTypes = (options: UseRetrieveTypes) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

// TODO fix type
export const useRetrieveType = (type: string, options: UseRetrieveType) => {
  const { data, loading, error } = useApiRequest({
    id: type,
    options,
    endpoint
  });

  return { data, loading, error };
};
