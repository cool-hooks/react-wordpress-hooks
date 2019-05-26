import { useApiRequest } from './useApiRequest';

type UseUpdateSettings = {
  title: string;
  description: string;
  timezone: string;
  date_format: string;
  time_format: string;
  start_of_week: number;
  language: string;
  use_smilies: boolean;
  default_category: number;
  default_post_format: string;
  posts_per_page: number;
  default_ping_status: string;
  default_comment_status: string;
};

const endpoint = 'settings';

export const useSettings = () => {
  const { data, loading, error } = useApiRequest({ endpoint });

  return { data, loading, error };
};

export const useUpdateSetting = (options: UseUpdateSettings) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post'
  });

  return { data, loading, error };
};
