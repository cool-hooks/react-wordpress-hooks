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

const endpoints = 'blocks';

export const useCreateBlockRevision = (
  id: number,
  options: UseCreateBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoints[0]}/${id}/autosaves`,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};

export const useRetrieveBlockRevisions = (
  id: number,
  options: UseRetrieveBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoints[0]}/${id}/autosaves`
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
    endpoint: `${endpoints[0]}/${parent}/autosaves/${id}`
  });

  return { data, loading, error };
};
