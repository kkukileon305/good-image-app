import { useQuery } from '@tanstack/react-query';
import { Photo } from '../types/response';

const client_id = 'iyCdUw8hjdZTKJZqBPPd3LL9QjVfjcqwH4kY0vA0LM8';

const usePhotos = () =>
  useQuery<Photo[]>({
    queryFn: () => fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`).then(res => res.json()),
    queryKey: ['photos'],
  });

export default usePhotos;
