import { useApiRequest } from './useApiRequest';

type UseRetrieveStatuses = {
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveStatus = {
  readonly context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'statuses';

export const useRetrieveStatuses = (options: UseRetrieveStatuses) => {
  return useApiRequest({ options, endpoint });
};

export const useRetrieveStatus = (
  status: string,
  options: UseRetrieveStatus
) => {
  return useApiRequest({
    id: status,
    options,
    endpoint,
  });
};
