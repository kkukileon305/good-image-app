import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Photo } from '../types/response';

const client_id = 'iyCdUw8hjdZTKJZqBPPd3LL9QjVfjcqwH4kY0vA0LM8';

const usePhotos = () =>
  useInfiniteQuery<Photo[]>({
    queryKey: ['photos'],
    queryFn: ({ pageParam = 1 }) => fetch(`https://api.unsplash.com/photos?page=${pageParam}&client_id=${client_id}`).then(res => res.json()),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
  });

export default usePhotos;
