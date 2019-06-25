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
  const { url, auth } = useContext(WPContext);

  const [data, setData] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | object | null>(null);

  useEffect(() => {
    const loadData = async () => {
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
          headers: {
            Authorization: `Basic ${btoa(`${auth.email}:${auth.password}`)}`
          }
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
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.email, auth.password, endpoint, requsetMethod, url]);

  return { data, loading, error };
};
