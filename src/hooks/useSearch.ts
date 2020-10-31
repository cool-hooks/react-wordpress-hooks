import { useApiRequest } from './useApiRequest';

type UseSearch = {
  readonly context?: 'view' | 'embed';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly type?: 'post';
  readonly subtype?: ['post' | 'page' | 'any'];
};

const endpoint = 'search';

export const useSearch = (options?: UseSearch) => {
  return useApiRequest({ options, endpoint });
};
