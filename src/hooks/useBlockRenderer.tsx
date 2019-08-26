import { useApiRequest } from './useApiRequest';

type UseRetrieveBlockRenderer = {
  name?: string;
  context?: 'view' | 'edit';
  attributes?: object;
  post_id?: number;
};

const endpoint = 'blocks';

export const useRetrieveBlockRenderer = (options: UseRetrieveBlockRenderer) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
