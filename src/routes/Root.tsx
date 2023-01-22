import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1440px] w-full mx-auto flex'>
        <ul className='w-[200px] h-[calc(100vh-73px)] border-r p-4 sticky top-[73px]'></ul>
        <main className='w-[calc(100%-200px)] p-4'>
          <Outlet />
        </main>
      </div>
      <footer className='border-t'>footer</footer>
    </>
  );
};
export default Root;
