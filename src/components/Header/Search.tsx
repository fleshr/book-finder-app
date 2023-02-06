import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface IProps {
  defaultValue?: string;
}

const Search: React.FC<IProps> = ({ defaultValue }) => {
  const [searchQuery, setSearchQuery] = useState(defaultValue ?? '');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
    router.push({
      pathname: '/search',
      query: { q: searchQuery },
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="relative w-full">
      <label
        htmlFor="search"
        className="absolute top-[9px] left-[9px] text-lg text-gray-400 md:left-[11px] md:top-[11px]"
      >
        <FiSearch />
      </label>
      <input
        ref={inputRef}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        id="search"
        type="text"
        className="h-9 w-full rounded-xl border border-gray-300 pl-[2.125rem] outline-gray-900 placeholder:text-gray-400 hover:border-gray-400 focus:outline-1 md:h-10 md:pl-9"
        placeholder="Search book"
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
