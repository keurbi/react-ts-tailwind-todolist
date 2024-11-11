import React, { FC } from 'react';


interface DoneHeaderProps {}

const DoneHeader: FC<DoneHeaderProps> = () => (
  <div className='flex gap-4 items-center h-[15%]'>
    <h2 className='text-2xl underline w-4/12 text-center'>Tasks done</h2>
    <input type="text" name="search" id="search" />
  </div>
);

export default DoneHeader;
