import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../routes/Main';
import PhotoDetail from '../routes/PhotoDetail';
import Random from '../routes/Random';
import Root from '../routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'photo/:photoId',
        element: <PhotoDetail />,
      },
      {
        path: 'random',
        element: <Random />,
      },
    ],
    errorElement: <div>error</div>,
  },
]);

export default router;
