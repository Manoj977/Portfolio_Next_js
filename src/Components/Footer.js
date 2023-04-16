import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { NextjsIcon } from './icons';
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg ">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build using{' '}
          <span className="w-6 mx-1">
            <NextjsIcon />
          </span>
          <Link href={'/'} className="underline underline-offset-2 ml-2">
            Manoj S
          </Link>
        </div>
        <Link href={'/'} className="underline underline-offset-2 ml-2">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
