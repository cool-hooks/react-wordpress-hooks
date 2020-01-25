import { useApiRequest } from './useApiRequest';

type UseThemes = {
  readonly context?: string;
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly status: ['active'];
};

const endpoint = 'themes';

export const useThemes = (options?: UseThemes) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
