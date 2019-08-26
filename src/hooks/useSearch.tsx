import { useApiRequest } from './useApiRequest';

type UseSearch = {
  context?: 'view' | 'embed';
  page?: number;
  per_page?: number;
  search?: string;
  type?: string;
  subtype?: ['post' | 'page' | 'any'];
};

const endpoint = 'search';

export const useSearch = (options: UseSearch) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
