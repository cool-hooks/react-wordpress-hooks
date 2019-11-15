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

const endpoints = ['blocks', 'autosaves'];

export const useCreateBlockRevision = (
  id: number,
  options: UseCreateBlockRevision
) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint: `${endpoints[0]}/${id}/${endpoints[1]}`,
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
    endpoint: `${endpoints[0]}/${id}/${endpoints[1]}`
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
    endpoint: `${endpoints[0]}/${parent}/${endpoints[1]}/${id}`
  });

  return { data, loading, error };
};
