import { useCallback, useEffect, useRef, useState } from 'react';

export function useGetData<T = unknown>(caseId: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const reqIdRef = useRef(0);

  const loadData = useCallback(async () => {
    const reqId = ++reqIdRef.current;

    setLoading(true);
    setError(false);
    setData(null);

    fetch(`/api/cases/${caseId}`)
      .then((response) => response.json())
      .then((data) => {
        if (reqIdRef.current !== reqId) return;
        setData(data);
      })
      .catch((ex) => {
        if (reqIdRef.current !== reqId) return;
        setError(ex);
      })
      .finally(() => {
        if (reqIdRef.current !== reqId) return;
        setLoading(false);
      });
  }, [caseId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Component unmount
  useEffect(
    () => () => {
      reqIdRef.current = -1;
    },
    [],
  );

  return [data, { loading, error, refetch: loadData }];
}
