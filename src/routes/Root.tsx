import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1440px] w-full mx-auto flex'>
        <ul className='hidden lg:block w-[200px] h-[calc(100vh-57px)] border-r p-4 sticky top-[57px]'></ul>
        <main className='w-full lg:w-[calc(100%-200px)] p-4'>
          <Outlet />
        </main>
      </div>
      <ScrollRestoration />
    </>
  );
};
export default Root;
