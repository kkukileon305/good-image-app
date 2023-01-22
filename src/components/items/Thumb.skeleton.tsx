import { forwardRef } from 'react';

const ThumbSkeleton = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className='w-full flex justify-between p-4 shadow-md border rounded-xl overflow-hidden'>
      <div className='w-[200px] h-[300px] bg-gray-400' />
      <div className='w-[calc(100%-216px)] flex flex-col gap-2'>
        <div className='w-1/2 h-4 bg-gray-400 rounded-full' />
        <div className='w-1/3 h-4 bg-gray-400 rounded-full' />
      </div>
    </div>
  );
});

export default ThumbSkeleton;
