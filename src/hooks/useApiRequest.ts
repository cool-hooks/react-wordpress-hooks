import { useState, useEffect } from 'react';
import { useSafeContext } from 'react-safe-context-hooks';

import { WordPressContext } from '../context';

import { serializeOptions, passToBody } from '../utils';

import { RequestMethod } from '../constants/RequestMethod';

interface Params {
  readonly id?: number | string;
  readonly options?: object | number;
  readonly requestMethod?: string;
  readonly endpoint?: string;
}

interface WordPressResponse {
  readonly status?: number;
  readonly statusText?: string;
  readonly headers?: Headers;
}

// TODO refactor
export const useApiRequest = ({
  id,
  options,
  requestMethod = RequestMethod.Get,
  endpoint = '',
}: Params) => {
  const { url, headers } = useSafeContext(WordPressContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | object | undefined>(undefined);
  const [data, setData] = useState<object[]>([]);

  const [response, setResponse] = useState<WordPressResponse | undefined>({
    status: undefined,
    statusText: undefined,
    headers: undefined,
  });

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const query = [`${url}/wp-json/wp/v2/${endpoint}`];

        // TODO type
        const settings = {
          method: requestMethod,
          headers,
        };

        if (!options) {
          return;
        }

        switch (requestMethod) {
          case RequestMethod.Get: {
            if (typeof options === 'number') {
              query.push(`/${options}`);
            } else if (Array.isArray(options)) {
              query.push(`?include=${options.join(',')}`);
            } else {
              query.push(serializeOptions(options));
            }

            break;
          }

          case RequestMethod.Post:
          case RequestMethod.Update: {
            if (typeof options === 'object') {
              Object.assign(settings, {
                body: passToBody(options),
              });
            }

            break;
          }

          case RequestMethod.Delete: {
            if (typeof options === 'object') {
              query.push(`/${id}`);

              Object.assign(settings, {
                body: passToBody(options),
              });
            }

            break;
          }

          // TODO
          // default:
        }

        const res = await fetch(query.join(''), settings);

        const parsedResponse = await res.json();

        setLoading(false);

        setResponse({
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
        });

        if (parsedResponse.code) {
          setError(parsedResponse);
        } else {
          setData(parsedResponse);
        }
      } catch (err) {
        setLoading(false);

        setError(err);
      }
    }

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, endpoint, requestMethod, url]);

  return { ...response, loading, error, data };
};
