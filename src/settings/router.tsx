import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../routes/Main';
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
    ],
  },
]);

export default router;
