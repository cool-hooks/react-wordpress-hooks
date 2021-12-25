import { useApiRequest } from './useApiRequest';

interface UseRetrieveTypes {
  readonly context?: 'view' | 'embed' | 'edit';
}

interface UseRetrieveType {
  readonly context?: 'view' | 'embed' | 'edit';
}

const endpoint = 'types';

export const useRetrieveTypes = (options: UseRetrieveTypes) => {
  return useApiRequest({ options, endpoint });
};

export const useRetrieveType = (type: string, options: UseRetrieveType) => {
  return useApiRequest({
    id: type,
    options,
    endpoint,
  });
};
