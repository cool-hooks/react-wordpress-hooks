import { useApiRequest } from './useApiRequest';

type UseRetrieveStatuses = {
  context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveStatus = {
  status?: string;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'statuses';

export const useRetrieveStatuses = (options: UseRetrieveStatuses) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveStatus = (
  status: string,
  options: UseRetrieveStatus
) => {
  const { data, loading, error } = useApiRequest({
    id: status,
    options,
    endpoint
  });

  return { data, loading, error };
};
