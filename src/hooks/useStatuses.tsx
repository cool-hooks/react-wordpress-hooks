import { useApiRequest } from './useApiRequest';

type UseStatuses = {
  context?: 'view' | 'embed' | 'edit';
};

type UseRetrieveStatus = {
  status?: string;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'statuses';

export const useStatuses = (options: UseStatuses) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveStatus = (options: UseRetrieveStatus) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
