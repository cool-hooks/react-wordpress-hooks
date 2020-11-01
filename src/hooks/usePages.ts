import { useApiRequest } from './useApiRequest';

import { RequestMethod } from '../enums/RequestMethod';

type UsePages = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly after?: string;
  readonly author?: number[];
  readonly author_exclude?: number[];
  readonly before?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly menu_order?: number;
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order';
  readonly parent?: number[];
  readonly parent_exclude?: number[];
  readonly slug?: string[];
  readonly status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'trash'
    | 'auto-draft'
    | 'inherit'
    | 'request-pending'
    | 'request-confirmed'
    | 'request-failed'
    | 'request-completed'
    | 'any';
};

type UseCreatePage = {
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
};

type UseRetrievePage = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly password?: string;
};

type UseUpdatePage = {
  readonly id?: number;
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
};

type UseDeletePage = {
  readonly force?: boolean;
};

const endpoint = 'pages';

export const usePages = (options?: UsePages | number | number[]) => {
  return useApiRequest({ options, endpoint });
};

export const useCreatePage = (options: UseCreatePage) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: RequestMethod.Post,
  });
};

export const useRetrievePage = (options: UseRetrievePage) => {
  return useApiRequest({ options, endpoint });
};

export const useUpdatePage = (options: UseUpdatePage) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: RequestMethod.Post,
  });
};

export const useDeletePage = (id: number, options?: UseDeletePage) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: RequestMethod.Delete,
  });
};
