import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-logo text-4xl md:text-[2.5rem]">Book Finder</h1>
    </Link>
  );
};

export default Logo;
