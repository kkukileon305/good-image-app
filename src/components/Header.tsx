import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='border-b sticky top-0 bg-white/70 backdrop-blur-sm'>
    <div className='flex items-center max-w-[1440px] w-full mx-auto'>
      <div className='flex gap-4 items-center w-[200px] p-4'>
        <h1 className='text-2xl font-bold'>
          <Link to={'/'}>Good Photo</Link>
        </h1>
      </div>
      <div className='flex items-center w-[calc(100%-200px)] justify-between gap-4 p-4'>
        <div className='bg-gray-300 px-4 py-2 rounded-full flex items-center'>
          <input type='text' className='bg-transparent' placeholder='Search...' />
          <BsSearch />
        </div>
        <p>Good</p>
      </div>
    </div>
  </header>
);

export default Header;
