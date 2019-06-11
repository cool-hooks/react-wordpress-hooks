import { useState, useEffect, useContext } from 'react';

import { WPContext } from '../context';

import { serialize } from '../utils';

export const useApiRequest = ({
  options,
  requsetMethod = 'get',
  endpoint = ''
}: {
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

        const res = await fetch(
          `${url}/wp-json/wp/v2${endpoint ? `/${endpoint}` : ''}${
            typeof options === 'number' && requsetMethod === 'get'
              ? `/${options}`
              : serialize(options)
          }`,
          {
            method: requsetMethod,
            headers: {
              Authorization: `Basic ${btoa(`${auth.email}:${auth.password}`)}`
            }
          }
        );

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
  }, [auth.email, auth.password, endpoint, options, requsetMethod, url]);

  return { data, loading, error };
};
