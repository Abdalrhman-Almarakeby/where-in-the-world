export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-t-blue p-4 text-center dark:border-t-white dark:bg-blue dark:text-white">
      Made with ❤ by{" "}
      <a
        target="_blank"
        href="https://www.youtube.com"
        className="hover:underline"
        rel="noreferrer"
      >
        Abdalrhman Almarakeby
      </a>{" "}
      all right receive <>&copy;</> {year}.
    </footer>
  );
}
