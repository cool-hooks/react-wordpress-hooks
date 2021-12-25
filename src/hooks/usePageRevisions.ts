import { useApiRequest } from './useApiRequest';

import { RequestMethod } from '../constants/RequestMethod';

interface UsePageRevisions {
  readonly parent?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

interface UseCreatePageRevision {
  readonly date?: string | null;
  readonly date_gmt?: string | null;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly parent?: number;
  readonly title?: object;
  readonly content?: object;
  readonly author?: number;
  readonly excerpt?: object;
  readonly featured_media?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly menu_order?: number;
  readonly meta?: object;
  readonly template?: string;
}

interface UseRetrievePageRevision {
  readonly parent?: number;
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
}

interface UseDeletePageRevision {
  readonly parent?: number;
  readonly force?: boolean;
}

const endpoint = 'pages';

export const usePageRevisions = (
  parent: number,
  options?: UsePageRevisions
) => {
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
  });
};

export const useCreatePageRevision = (
  parent: number,
  options: UseCreatePageRevision
) => {
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/autosaves`,
    requestMethod: RequestMethod.Post,
  });
};

export const useRetrievePageRevision = (
  parent: number,
  type: 'revisions' | 'autosaves',
  options: UseRetrievePageRevision
) => {
  return useApiRequest({
    options,
    endpoint: `${endpoint}/${parent}/${type}`,
  });
};

export const useDeletePageRevision = (
  parent: number,
  id: number,
  options?: UseDeletePageRevision
) => {
  return useApiRequest({
    id,
    options,
    endpoint: `${endpoint}/${parent}/revisions`,
    requestMethod: RequestMethod.Delete,
  });
};
