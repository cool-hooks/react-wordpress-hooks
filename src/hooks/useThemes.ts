import { useApiRequest } from './useApiRequest';

interface UseThemes {
  readonly context?: string;
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly status: ['active'];
}

const endpoint = 'themes';

export const useThemes = (options?: UseThemes) => {
  return useApiRequest({ options, endpoint });
};
