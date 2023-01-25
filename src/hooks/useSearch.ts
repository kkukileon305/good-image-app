import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { SearchResponse } from '../types/response';

const client_id = 'iyCdUw8hjdZTKJZqBPPd3LL9QjVfjcqwH4kY0vA0LM8';

const useSearch = ({ keyword, page }: { keyword: string; page: number }) => {
  const [result, setResult] = useState<SearchResponse>();

  return {
    ...useMutation<SearchResponse>({
      mutationFn: () => fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${keyword}&page=${page}`).then(res => res.json()),
      onSuccess: response => setResult(response),
    }),
    result,
  };
};

export default useSearch;
