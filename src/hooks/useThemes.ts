import { useApiRequest } from './useApiRequest';

type UseThemes = {
  context?: string;
  page?: number;
  per_page?: number;
  search?: string;
  status: ['active'];
};

const endpoint = 'themes';

export const useThemes = (options?: UseThemes) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
