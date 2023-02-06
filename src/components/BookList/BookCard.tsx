import { IBook } from '@/interfaces/BookList';
import Image from 'next/image';

interface Props {
  book: IBook;
}

const BookCard: React.FC<Props> = ({ book }) => {
  const title = book.volumeInfo?.title;
  const authors = book.volumeInfo?.authors;
  const publisher = book.volumeInfo?.publisher;
  const link = book.volumeInfo?.infoLink;
  const image =
    book.volumeInfo?.imageLinks?.thumbnail || '/images/blank-book.jpg';
  const publishedYear = book.volumeInfo?.publishedDate
    ? new Date(book.volumeInfo?.publishedDate).getUTCFullYear()
    : null;

  return (
    <article className="mt-20 rounded-md border border-gray-300 bg-white py-3 px-4 text-center shadow-lighter">
      <div className="-mt-[5.75rem] flex h-40 justify-center">
        <a
          href={link}
          className="relative h-full overflow-hidden rounded-md bg-white shadow-light"
        >
          <Image
            src={image}
            alt={title}
            className="h-full w-auto"
            width={105}
            height={160}
          />
        </a>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium leading-tight line-clamp-2">
          <a href={link}>{title}</a>
        </h3>
        <div className="mt-2 flex flex-col items-center empty:m-0 ">
          {authors && (
            <p className="mt- text-sm text-gray-600 line-clamp-2">
              by {authors.join(', ')}
            </p>
          )}
          {publishedYear && publisher && (
            <p className="flex items-center text-sm text-gray-600">
              {publishedYear ?? <span>{publishedYear}</span>}
              {publishedYear && publisher && (
                <i className="mx-1.5 h-1 w-1 rounded-sm bg-gray-600" />
              )}
              {publisher ?? <span className="line-clamp-1">{publisher}</span>}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default BookCard;
