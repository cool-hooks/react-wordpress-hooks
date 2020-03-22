import { useApiRequest } from './useApiRequest';

type UseComments = {
  readonly context?: 'view' | 'embed' | 'edit';
  readonly page?: number;
  readonly per_page?: number;
  readonly search?: string;
  readonly after?: string;
  readonly author?: number[];
  readonly author_exclude?: number[];
  readonly author_email?: string;
  readonly before?: string;
  readonly exclude?: number[];
  readonly include?: number[];
  readonly offset?: number;
  readonly order?: 'asc' | 'desc';
  readonly orderby?:
    | 'date'
    | 'date_gmt'
    | 'id'
    | 'include'
    | 'post'
    | 'parent'
    | 'type';
  readonly parent?: number[];
  readonly parent_exclude?: number[];
  readonly post?: number[];
  readonly status?: string;
  readonly type?: string;
  readonly password?: string;
};

type UseCreateComment = {
  readonly author?: number;
  readonly author_email?: string;
  readonly author_ip?: string;
  readonly author_name?: string;
  readonly author_url?: string;
  readonly author_user_agent?: string;
  readonly content?: object;
  readonly date?: string;
  readonly date_gmt?: string;
  readonly parent?: number;
  readonly post?: number;
  readonly status?: string;
  readonly meta?: object;
};

type UseRetrieveComment = {
  readonly id?: number;
  readonly context?: 'view' | 'embed' | 'edit';
  readonly password?: string;
};

type UseUpdateComment = {
  readonly id?: number;
  readonly author?: number;
  readonly author_email?: string;
  readonly author_ip?: string;
  readonly author_name?: string;
  readonly author_url?: string;
  readonly author_user_agent?: string;
  readonly content?: object;
  readonly date?: string;
  readonly date_gmt?: string;
  readonly parent?: number;
  readonly post?: number;
  readonly status?: string;
  readonly meta?: object;
};

type UseDeleteComment = {
  readonly force?: boolean;
  readonly password?: string;
};

const endpoint = 'comments';

export const useComments = (options?: UseComments | number | number[]) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useCreateComment = (options: UseCreateComment) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });

  return { data, loading, error };
};

export const useRetrieveComment = (options: UseRetrieveComment) => {
  const { data, loading, error } = useApiRequest({ options, endpoint });

  return { data, loading, error };
};

export const useUpdateComment = (options: UseUpdateComment) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });

  return { data, loading, error };
};

export const useDeleteComment = (id: number, options?: UseDeleteComment) => {
  const { data, loading, error } = useApiRequest({
    id,
    options,
    endpoint,
    requsetMethod: 'delete',
  });

  return { data, loading, error };
};
