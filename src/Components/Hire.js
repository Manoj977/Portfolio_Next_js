import React from 'react';
import { CircularText } from './icons';
import Link from 'next/link';

const Hire = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-black animate-spin-slow'} />
      </div>
      {/* <Link href={"mailto:manojsharvan98@gmail.com"} className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid boder-dark w-20 h-20 rounded-full font-semibold  hover:bg-light hover:text-dark transition duration-150 ease-in">Hire Me</Link> */}
      <Link
        href={'mailto:manojsharvan98@gmail.com'}
        className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid boder-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition duration-150 ease-in"
      >
        Contact
      </Link>
    </div>
  );
};

export default Hire;
