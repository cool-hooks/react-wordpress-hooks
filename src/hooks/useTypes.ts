import { useApiRequest } from './useApiRequest';

type UseRetrieveTypes = {
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveType = {
  readonly context?: 'view' | 'embed' | 'edit';
};

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
