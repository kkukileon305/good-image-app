import { useParams } from 'react-router-dom';
import usePhoto from '../hooks/usePhoto';
import krIntl from '../libs/dateFormatter';

const PhotoDetail = () => {
  const { photoId } = useParams();
  const { data: photo, isLoading, isError } = usePhoto(photoId || '6kajEqr84iY');

  return (
    <div className='flex flex-col items-center md:items-stretch md:flex-row gap-4'>
      <img className='w-[400px]' src={photo?.urls.small} alt={photo?.alt_description || 'No desc'} />
      <div className='flex flex-col w-full md:w-[calc(100%-400px)] justify-between border p-4 rounded-xl'>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-xl'>{photo?.alt_description || 'No desc'}</p>
          <p>Color: {photo?.color}</p>
          <p>
            Size: {photo?.width} x {photo?.height}
          </p>
          <p>{photo?.description || 'No alt_desc'}</p>
        </div>
        <div className='flex gap-4 justify-end items-center'>
          <p className='border rounded-full aspect-square w-8 border-pink-300 flex justify-center items-center text-pink-300'>{photo?.likes}</p>
          <a target='_blank' href={photo?.links.download} className='px-4 py-1 border rounded-full'>
            Down
          </a>
          <p>{photo && krIntl.format(new Date(photo.created_at))}</p>
        </div>{' '}
      </div>
    </div>
  );
};
export default PhotoDetail;
