import { useApiRequest } from './useApiRequest';

interface UseRetrieveStatuses {
  readonly context?: 'view' | 'embed' | 'edit';
}

interface UseRetrieveStatus {
  readonly context?: 'view' | 'embed' | 'edit';
}

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
