import { useApiRequest } from './useApiRequest';

type UseWordPress = {
  readonly endpoint: string;
  readonly options?: number | object;
  readonly requsetMethod?: string;
};

export const useWordPress = (params: UseWordPress) => {
  return useApiRequest(params);
};
