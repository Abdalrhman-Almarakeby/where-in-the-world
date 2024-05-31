export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-t-blue px-4 py-2 text-center text-sm capitalize dark:border-t-white dark:bg-blue dark:text-white">
      Made by{" "}
      <a
        target="_blank"
        href="https://github.com/Abdalrhman-Almarakeby"
        className="hover:underline"
        rel="noreferrer"
      >
        Abdalrhman Almarakeby
      </a>
      <br />
      All copy right receive <>&copy;</> {year}.
    </footer>
  );
}
