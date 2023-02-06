import { IBook } from '@/interfaces/BookList';
import BookCard from './BookCard';

interface Props {
  bookList: IBook[];
}

const BookList: React.FC<Props> = ({ bookList }) => {
  return (
    <div className="grid grid-cols-books gap-5">
      {bookList.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
