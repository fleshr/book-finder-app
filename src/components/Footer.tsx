const Footer = () => {
  return (
    <footer className="mt-6 text-center text-xs text-gray-500 md:mt-8 md:text-sm">
      <p>
        Made by{' '}
        <a
          href="https://github.com/fleshr"
          className="font-medium hover:underline"
        >
          fleshr
        </a>
      </p>
      <p>
        Book Database -{' '}
        <a
          href="https://books.google.com/"
          className="font-medium hover:underline"
        >
          Google Books
        </a>
      </p>
    </footer>
  );
};

export default Footer;
