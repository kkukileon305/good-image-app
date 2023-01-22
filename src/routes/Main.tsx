import PhotoThumb from '../components/items/PhotoThumb';
import usePhotos from '../hooks/usePhotos';

const MainPage = () => {
  const { data: photos, isLoading, isError } = usePhotos();

  return (
    <ul>
      {photos?.map(photo => (
        <PhotoThumb key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};
export default MainPage;
