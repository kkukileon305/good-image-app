import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PhotoThumb from '../components/items/Thumb';
import ThumbSkeleton from '../components/items/Thumb.skeleton';
import usePhotos from '../hooks/usePhotos';

const MainPage = () => {
  const { data: photos, isLoading, isError, fetchNextPage } = usePhotos();
  const [skeletonRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <ThumbSkeleton />;

  return (
    <>
      <ul>
        {photos?.pages.flat().map(photo => (
          <PhotoThumb key={photo.id} photo={photo} />
        ))}
      </ul>
      <ThumbSkeleton ref={skeletonRef} />
    </>
  );
};
export default MainPage;
