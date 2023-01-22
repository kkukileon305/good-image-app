import usePhotos from '../hooks/usePhotos';

const MainPage = () => {
  const { data: photos, isLoading, isError } = usePhotos();

  return (
    <ul>
      {photos?.map(photo => (
        <li key={photo.id}>
          <img src={photo.urls.regular} alt={photo.alt_description} />
        </li>
      ))}
    </ul>
  );
};
export default MainPage;
