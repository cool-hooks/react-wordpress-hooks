import { useApiRequest } from './useApiRequest';

import { RequestMethod } from '../enums/RequestMethod';

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
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${id}/autosaves`,
  });
};

export const useCreateBlockRevision = (
  id: number,
  options: UseCreateBlockRevision
) => {
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${id}/autosaves`,
    requsetMethod: RequestMethod.Post,
  });
};

export const useRetrieveBlockRevision = (
  parent: number,
  id: number,
  options: UseRetrieveBlockRevision
) => {
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves/${id}`,
  });
};
