import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../routes/Main';
import PhotoDetail from '../routes/PhotoDetail';
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
        element: <div>random</div>,
      },
    ],
    errorElement: <div>error</div>,
  },
]);

export default router;
