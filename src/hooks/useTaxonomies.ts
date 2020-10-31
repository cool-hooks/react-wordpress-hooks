import { useApiRequest } from './useApiRequest';

type UseRetrieveTaxonomies = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly type?: string;
};

type UseRetrieveTaxonomy = {
  readonly context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'taxonomies';

export const useRetrieveTaxonomies = (options: UseRetrieveTaxonomies) => {
  return useApiRequest({ options, endpoint });
};

export const useRetrieveTaxonomy = (
  taxonomy: string,
  options: UseRetrieveTaxonomy
) => {
  return useApiRequest({
    id: taxonomy,
    options,
    endpoint,
  });
};
