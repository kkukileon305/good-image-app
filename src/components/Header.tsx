import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='border-b sticky top-0 bg-white/70 backdrop-blur-sm z-10'>
    <div className='flex items-center max-w-[1440px] w-full mx-auto'>
      <div className='flex gap-4 items-center w-[200px] px-4 py-2'>
        <h1 className='text-2xl font-bold'>
          <Link to={'/'}>Good Photo</Link>
        </h1>
      </div>
      <div className='flex items-center w-[calc(100%-200px)] justify-between gap-4 px-4 py-2'>
        <Link to={'search'}>
          <div className='hidden md:flex bg-gray-300 px-4 py-2 rounded-full items-center'>
            <button className='pr-5'>Search...</button>
            <BsSearch />
          </div>
        </Link>
        <div className='flex items-center gap-4'>
          <Link to={'/random'}>Random Photo</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
