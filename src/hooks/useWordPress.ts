import { useApiRequest } from './useApiRequest';

type UseWordPress = {
  readonly endpoint: string;
  readonly options?: number | object;
  readonly requsetMethod?: string;
};

export const useWordPress = ({
  endpoint,
  options,
  requsetMethod,
}: UseWordPress) => {
  const { data, loading, error } = useApiRequest({
    endpoint,
    options,
    requsetMethod,
  });

  return { data, loading, error };
};
