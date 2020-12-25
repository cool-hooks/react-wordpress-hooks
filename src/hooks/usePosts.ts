import { useApiRequest } from './useApiRequest';

import { RequestMethod } from '../enums/RequestMethod';

type UsePosts = {
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
    | 'title';
  readonly slug?: string[];
  readonly status?: [
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
    | 'any'
  ];
  readonly categories?: number[];
  readonly categories_exclude?: number[];
  readonly tags?: number[];
  readonly tags_exclude?: number[];
  readonly sticky?: boolean;
};

type UseCreatePost = {
  readonly date?: string;
  readonly date_gmt?: string;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly title?: object;
  readonly content?: object;
  readonly author?: number;
  readonly excerpt?: object;
  readonly featured_media?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  readonly meta?: object;
  readonly sticky?: boolean;
  readonly template?: string;
  readonly categories?: number[];
  readonly tags?: number[];
};

type UseRetrievePost = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly password?: string;
};

type UseUpdatePost = {
  readonly id?: number;
  readonly date?: string;
  readonly date_gmt?: string;
  readonly slug?: string;
  readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  readonly password?: string;
  readonly title?: object;
  readonly content?: object;
  readonly author?: number;
  readonly excerpt?: object;
  readonly featured_media?: number;
  readonly comment_status?: 'open' | 'closed';
  readonly ping_status?: 'open' | 'closed';
  readonly format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  readonly meta?: object;
  readonly sticky?: boolean;
  readonly template?: string;
  readonly categories?: number[];
  readonly tags?: number[];
};

type UseDeletePost = {
  readonly force?: boolean;
};

const endpoint = 'posts';

export const usePosts = (options?: UsePosts | number | number[]) => {
  return useApiRequest({ options, endpoint });
};

export const useCreatePost = (options: UseCreatePost) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: RequestMethod.Post,
  });
};

export const useRetrievePost = (options: UseRetrievePost) => {
  return useApiRequest({ options, endpoint });
};

export const useUpdatePost = (options: UseUpdatePost) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: RequestMethod.Post,
  });
};

export const useDeletePost = (id: number, options?: UseDeletePost) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: RequestMethod.Delete,
  });
};
