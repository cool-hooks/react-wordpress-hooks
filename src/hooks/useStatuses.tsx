import { useApiRequest } from './useApiRequest';

type UseStatuses = {
  context: 'view' | 'embed' | 'edit';
};

type UseRetriveStatus = {
  context: 'view' | 'embed' | 'edit';
};

const endpoint = 'statuses';

export const useStatuses = (options: UseStatuses) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetriveStatus = (options: UseRetriveStatus) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
