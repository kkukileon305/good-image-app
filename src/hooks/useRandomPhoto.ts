import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Photo } from '../types/response';

const client_id = 'iyCdUw8hjdZTKJZqBPPd3LL9QjVfjcqwH4kY0vA0LM8';

const useRandomPhoto = () =>
  useQuery<Photo>({
    queryFn: () => fetch(`https://api.unsplash.com/photos/random?client_id=${client_id}`).then(res => res.json()),
    queryKey: ['photos', 'random'],
    staleTime: 0,
  });

export default useRandomPhoto;
