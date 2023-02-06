import Logo from './Logo';
import Search from './Search';

interface IProps {
  defaultSearchValue?: string;
}

const Header: React.FC<IProps> = ({ defaultSearchValue }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-grow-[2] items-end">
        <Logo />
      </div>
      <div className="mt-5 w-full flex-grow-[3] md:mt-7 md:max-w-[65%]">
        <Search defaultValue={defaultSearchValue} />
      </div>
    </div>
  );
};

export default Header;
