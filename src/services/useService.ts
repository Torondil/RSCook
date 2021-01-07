import { useEffect, useState } from 'react';

import FilterUrl from '@/constants';
import { IFilter } from '@/types/Filter';
import { Service } from '@/types/Service';

const useService = (): Service<IFilter[]> => {
  const [result, setResult] = useState<Service<IFilter[]>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(FilterUrl)
      .then(response => response.json())
      .then((response: IFilter[]) => setResult({ status: 'loaded', data: response }))
      .catch((error: Error) => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useService;
