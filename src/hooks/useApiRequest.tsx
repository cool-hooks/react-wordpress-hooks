import { useState, useEffect, useContext } from 'react';

import { WPContext } from '../context';

export const useApiRequest = ({
  endpoint = '',
  options,
  requsetMethod = 'get'
}: {
  options?: any;
  requsetMethod?: string;
  endpoint?: string;
}) => {
  const url = useContext(WPContext);

  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${url}/wp-json/wp/v2${endpoint ? `/${endpoint}` : ''}`,
          {
            method: requsetMethod
          }
        );

        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    loadData();
  }, [endpoint, requsetMethod, url]);

  return { data, loading, error };
};
