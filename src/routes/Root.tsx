import usePhotos from '../hooks/usePhotos';

const Root = () => {
  const { data } = usePhotos();
  return (
    <div className='font-bold'>
      {data?.map(photo => (
        <div key={photo.id}>{photo.user.first_name}</div>
      ))}
    </div>
  );
};
export default Root;
