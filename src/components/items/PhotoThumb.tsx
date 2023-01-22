import krIntl from '../../libs/dateFormatter';
import { Photo } from '../../types/response';

type PhotoThumbProps = {
  photo: Photo;
};

const PhotoThumb = ({ photo }: PhotoThumbProps) => {
  return (
    <li className='flex justify-between p-4 shadow-md border mb-4 rounded-xl'>
      <div className='w-[calc(100%-216px)] flex flex-col justify-between'>
        <p>{photo.description || 'There is no description...'}</p>
        <div className='flex justify-end gap-4 text-gray-400'>
          <p>{krIntl.format(new Date(photo.created_at))}</p>
          <p>{photo.user.name}</p>
        </div>
      </div>
      <img src={photo.urls.thumb} alt={photo.alt_description || 'There is no description...'} />
    </li>
  );
};
export default PhotoThumb;
