import { useApiRequest } from './useApiRequest';

type UseRetrieveBlockRenderer = {
  context?: 'view' | 'edit';
  attributes?: object;
  post_id?: number;
};

const endpoint = 'block-renderer';

export const useRetrieveBlockRenderer = (
  name: string,
  options: UseRetrieveBlockRenderer
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${name}`
  });

  return { data, loading, error };
};
