import { useApiRequest } from './useApiRequest';

type UseCreateBlockRevision = {
  parent?: number;
  date?: string;
  date_gmt?: string;
  slug?: number;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  title?: object;
  content?: object;
  template?: string;
};

type UseRetrieveBlockRevision = {
  parent?: number;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'blocks';

export const useCreateBlockRevision = (options: UseCreateBlockRevision) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveBlockRevision = (options: UseRetrieveBlockRevision) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
