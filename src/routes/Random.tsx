import useRandomPhoto from '../hooks/useRandomPhoto';

const Random = () => {
  const { data: photo, isFetching, isError } = useRandomPhoto();

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <img src={photo?.urls.small} alt={photo?.alt_description || 'No alt_desc'} />
    </div>
  );
};
export default Random;
