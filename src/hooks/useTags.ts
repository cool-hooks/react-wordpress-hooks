import { useApiRequest } from './useApiRequest';

type UseTags = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: number;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  readonly hide_empty?: boolean;
  readonly post?: number;
  readonly slug?: string[];
};

type UseCreateTag = {
  readonly description?: string;
  readonly name: string;
  readonly slug?: string;
  readonly meta?: object;
};

type UseRetrieveTag = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
};

type UseUpdateTag = {
  readonly id?: number;
  readonly description?: string;
  readonly name?: string;
  readonly slug?: string;
  readonly meta?: object;
};

type UseDeleteTag = {
  readonly force?: boolean;
};

const endpoint = 'tags';

export const useTags = (options?: UseTags | number | number[]) => {
  return useApiRequest({ options, endpoint });
};

export const useCreateTag = (options: UseCreateTag) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useRetrieveTag = (options: UseRetrieveTag) => {
  return useApiRequest({ options, endpoint });
};

export const useUpdateTag = (options: UseUpdateTag) => {
  return useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });
};

export const useDeleteTag = (id: number, options?: UseDeleteTag) => {
  return useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });
};
