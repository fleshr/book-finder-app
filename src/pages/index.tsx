import Footer from '@/components/Footer';
import Logo from '@/components/Header/Logo';
import Search from '@/components/Header/Search';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Book Finder</title>
      </Head>
      <div className="mx-auto grid min-h-full max-w-screen-xl grid-rows-[1fr_auto] px-2.5 py-6 md:px-5 md:py-8 lg:pt-12">
        <main className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-grow-[2] items-end">
            <Logo />
          </div>
          <div className="mt-5 w-full flex-grow-[3] md:mt-7 md:max-w-[65%]">
            <Search />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
