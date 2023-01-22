import { useParams } from 'react-router-dom';

const PhotoDetail = () => {
  const { photoId } = useParams();

  return <div>{photoId}</div>;
};
export default PhotoDetail;
