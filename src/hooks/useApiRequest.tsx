import { useState, useEffect, useContext } from 'react';

import { WPContext } from '../context';

import { serialize } from '../utils';

export const useApiRequest = ({
  id,
  options,
  requsetMethod = 'get',
  endpoint = ''
}: {
  id?: number;
  options?: object | number;
  requsetMethod?: string;
  endpoint?: string;
}) => {
  const { url, headers } = useContext(WPContext);

  const [data, setData] = useState<object[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | object | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const query = [`${url}/wp-json/wp/v2/${endpoint}`];

        if (requsetMethod === 'delete') {
          query.push(`/${id}`);
        }

        if (requsetMethod === 'get') {
          if (typeof options === 'number') {
            query.push(`/${options}`);
          } else if (Array.isArray(options)) {
            query.push(`?include=${options.join(',')}`);
          } else {
            query.push(serialize(options));
          }
        }

        const res = await fetch(query.join(''), {
          method: requsetMethod,
          headers
        });

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

  return { data, loading, error };
};
