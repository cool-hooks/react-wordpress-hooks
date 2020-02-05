import { useState, useEffect, useContext } from 'react';

import { WordPressContext } from '../context';

import { serializeOptions, passToBody } from '../utils';

export const useApiRequest = ({
  id,
  options,
  requsetMethod = 'get',
  endpoint = ''
}: {
  readonly id?: number | string;
  readonly options?: object | number;
  readonly requsetMethod?: string;
  readonly endpoint?: string;
}) => {
  const { url, headers } = useContext(WordPressContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | object | null>(null);
  const [data, setData] = useState<object[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const query = [`${url}/wp-json/wp/v2/${endpoint}`];

        const settings = {
          method: requsetMethod,
          headers
        };

        switch (requsetMethod) {
          case 'get': {
            if (typeof options === 'number') {
              query.push(`/${options}`);
            } else if (Array.isArray(options)) {
              query.push(`?include=${options.join(',')}`);
            } else {
              query.push(serializeOptions(options as object));
            }

            break;
          }

          case 'post':
          case 'update': {
            Object.assign(settings, {
              body: passToBody(options as object)
            });

            break;
          }

          case 'delete': {
            query.push(`/${id}`);

            Object.assign(settings, {
              body: passToBody(options as object)
            });

            break;
          }
        }

        const res = await fetch(query.join(''), settings);

        const response = await res.json();

        setLoading(false);

        if (response.code) {
          setError(response);
        } else {
          setData(response);
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    }

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, endpoint, requsetMethod, url]);

  return { loading, error, data };
};
