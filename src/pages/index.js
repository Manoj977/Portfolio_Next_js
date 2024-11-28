import Layout from '@/Components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/Components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/Components/icons';
import Hire from '@/Components/Hire';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
export default function Home() {
  return (
    <>
      <Head>
        <title>Manoj | Home</title>
        <meta name="description" content="Home" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full ">
            <div className="w-1/2">
              <Image src={profilePic} alt="Profile" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col itmes-center self-center">
              <AnimatedText
                text={'Turning Vision Into Reality With Code And Design.'}
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium ">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={'/dummy.pdf'}
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover hover:bg-light hover:text-dark border-2 border-solid border-transparenthover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href={'mailto:manojsharvan@gmail.com'}
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hire />
        <div className="absolute right-8 bottom-8 inline-block w-16">
          <Image src={lightBulb} alt="Theme" className="w-full" />
        </div>
      </main>
    </>
  );
}
