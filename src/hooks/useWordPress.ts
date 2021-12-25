import { useApiRequest } from './useApiRequest';

interface UseWordPress {
  readonly endpoint: string;
  readonly options?: number | object;
  readonly requestMethod?: string;
}

export const useWordPress = (params: UseWordPress) => {
  return useApiRequest(params);
};
