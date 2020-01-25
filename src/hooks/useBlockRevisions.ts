import { useApiRequest } from './useApiRequest';

type UseCreateBlockRevision = {
  parent?: number;
  date?: string | null;
  date_gmt?: string | null;
  slug?: number;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  password?: string;
  title?: object;
  content?: object;
  template?: string;
};

type UseRetrieveBlockRevision = {
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'blocks';

export const useRetrieveBlockRevisions = (
  id: number,
  options: UseRetrieveBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${id}/autosaves`
  });

  return { data, loading, error };
};

export const useCreateBlockRevision = (
  id: number,
  options: UseCreateBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${id}/autosaves`,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveBlockRevision = (
  parent: number,
  id: number,
  options: UseRetrieveBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves/${id}`
  });

  return { data, loading, error };
};
