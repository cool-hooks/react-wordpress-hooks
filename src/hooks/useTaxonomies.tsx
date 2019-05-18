import { useApiRequest } from './useApiRequest';

type UseTaxonomies = {
  context: 'view' | 'embed' | 'edit';
};

type UseRetriveTaxonomy = {
  context: 'view' | 'embed' | 'edit';
};

const endpoint = 'taxonomies';

export const useTaxonomies = (options: UseTaxonomies) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useRetriveTaxonomy = (options: UseRetriveTaxonomy) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};
