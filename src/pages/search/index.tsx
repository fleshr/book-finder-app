import BookList from '@/components/BookList/BookList';
import Footer from '@/components/Footer';
import Logo from '@/components/Header/Logo';
import Search from '@/components/Header/Search';
import { IBookList } from '@/interfaces/BookList';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

type IProps = { q: string; data: IBookList };

const SearchPage: React.FC<IProps> = ({ q, data }) => {
  return (
    <>
      <Head>
        <title>{`${q} - Book Finder`}</title>
      </Head>
      <div className="mx-auto grid min-h-full max-w-screen-xl grid-rows-[auto_1fr_auto] px-2.5 py-6 md:px-5 md:py-8 lg:pt-12">
        <header className="flex flex-col items-center justify-center">
          <Logo />
          <div className="mt-5 w-full md:mt-7 md:max-w-[65%]">
            <Search defaultValue={q} />
          </div>
        </header>
        <main className="mt-10 flex-grow md:mt-12 lg:mt-14">
          <section>
            <h2 className="text-center text-xl font-medium md:text-[1.375rem]">
              Search results
            </h2>
            <div className="mt-5 md:mt-7">
              {data.items ? (
                <BookList bookList={data.items} />
              ) : (
                <p className="text-center">Nothing found</p>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  q: string;
  data: IBookList;
}> = async (context) => {
  let q = context.query.q;
  if (Array.isArray(q)) q = q[0];

  if (!q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=24&projection=lite&orderBy=relevance&printType=books&q=${q}`
    );
    const data: IBookList = await res.json();
    return {
      props: {
        q,
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default SearchPage;
