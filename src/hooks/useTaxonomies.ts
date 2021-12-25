import { useApiRequest } from './useApiRequest';

interface UseRetrieveTaxonomies {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly type?: string;
}

interface UseRetrieveTaxonomy {
  readonly context?: 'view' | 'embed' | 'edit';
}

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
