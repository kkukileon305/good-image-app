import { FormEventHandler, useState } from 'react';
import Thumb from '../components/items/Thumb';
import useSearch from '../hooks/useSearch';

const Search = () => {
  const [value, setValue] = useState('');
  const { mutate, result } = useSearch({
    keyword: value,
    page: 2,
  });

  const onSubmit: FormEventHandler = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Search...' className='block border w-full p-2' onChange={e => setValue(e.target.value)} />
      </form>
      <h2 className='my-4 font-bold text-2xl'>Result...</h2>
      <ul className=''>
        {result?.results.map(result => (
          <Thumb key={result.id} photo={result} />
        ))}
      </ul>
    </div>
  );
};
export default Search;
