import AnimatedText from '@/Components/AnimatedText';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EmerlandImage from '../../public/images/projects/Emerland.png';
const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3  -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target={'_blank'}
            className="flex items-center bg-dark text-light p-2.5  rounded-lg text-sm font-semibold hover hover:scale-105  border-2 border-solid border-transparent duration-150 transition ease-in-out "
          >
            Click Here
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3  -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl cursor-default">
          {type}
        </span>
        {link !== '/' ? (
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-3xl font-bold cursor-default">
            {title}
          </h2>
        )}
        <div className="mt-2 flex items-center">
          {link !== '/' ? (
            <Link
              href={link}
              target={'_blank'}
              className="flex items-center bg-dark text-light p-2.5  rounded-lg text-sm font-semibold hover hover:scale-105  border-2 border-solid border-transparent duration-150 transition ease-in-out "
            >
              Visit
            </Link>
          ) : (
            <div className="pb-[3rem]"></div>
          )}
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Manoj | Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Emerland Online Shopping"
                summary="Online Shopping website created using React,Tailwind,Firebase auth"
                img={EmerlandImage}
                link="https://emerlandonlineshopping.web.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Emerland Online Shopping"
                img={EmerlandImage}
                link="https://emerlandonlineshopping.web.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Google Keep Notes Clone"
                img={EmerlandImage}
                link="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
