import React, { useEffect, useState } from 'react';

// import styles from '@/components/Filter/Filter.scss';
import FilterUrl from '@/constants';
import { IFilter } from '@/types/Filter';
import { Service } from '@/types/Service';

const Filter = (): JSX.Element => {
  const [result, setResult] = useState<Service<IFilter[]>>({
    status: 'loading',
  });
  const [stateQuery, setStateQuery] = useState<string>('');
  const [stateNumber, setStateNumber] = useState<number>(0);
  const [stateApiKey, setApiKey] = useState<string>('');
  useEffect(() => {
    if (result.status === 'loaded') {
      // console.log(result.data);
    }
  }, [result]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(`${FilterUrl}?query=${stateQuery}&maxFat=25&number=${stateNumber}&apiKey=${stateApiKey}`);
    fetch(`${FilterUrl}?query=${stateQuery}&maxFat=25&number=${stateNumber}&apiKey=${stateApiKey}`)
      .then(response => response.json())
      .then((response: IFilter[]) => setResult({ status: 'loaded', data: response }))
      .catch((error: Error) => setResult({ status: 'error', error }));
  };

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateQuery(e.target.value);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateNumber(+e.target.value);
  };

  const handleChangeApiKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">
        Запрос
        <input id="query" type="text" onChange={handleChangeQuery} />
      </label>
      <label htmlFor="number">
        Число
        <input type="number" id="number" onChange={handleChangeNumber} />
      </label>
      <label htmlFor="apiKey">
        api Key
        <input type="apiKey" id="apiKey" onChange={handleChangeApiKey} />
      </label>

      <button type="submit">ok</button>
    </form>
  );
};

export default Filter;
