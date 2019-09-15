import { useApiRequest } from './useApiRequest';

type UseTaxonomies = {
  context?: 'view' | 'embed' | 'edit';
  type?: string;
};

type UseRetrieveTaxonomy = {
  taxonomy?: string;
  context?: 'view' | 'embed' | 'edit';
};

const endpoint = 'taxonomies';

export const useTaxonomies = (options: UseTaxonomies) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetrieveTaxonomy = (options: UseRetrieveTaxonomy) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
