import { Link } from 'react-router-dom';
import krIntl from '../../libs/dateFormatter';
import { Photo } from '../../types/response';

type PhotoThumbProps = {
  photo: Photo;
};

const PhotoThumb = ({ photo }: PhotoThumbProps) => {
  return (
    <li className='mb-4'>
      <Link to={`/photo/${photo.id}`} className='w-full flex flex-col gap-4 sm:flex-row justify-between items-center sm:items-stretch p-4 shadow-md border rounded-xl overflow-hidden'>
        <img className='w-[200px]' src={photo.urls.thumb} alt={photo.alt_description || 'There is no description...'} />
        <div className='w-full sm:w-[calc(100%-216px)] flex flex-col justify-between'>
          <p>{photo.alt_description || 'There is no description...'}</p>
          <div className='flex justify-start sm:justify-end gap-4 text-gray-400'>
            <p>{krIntl.format(new Date(photo.created_at))}</p>
            <p>{photo.user.name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default PhotoThumb;
