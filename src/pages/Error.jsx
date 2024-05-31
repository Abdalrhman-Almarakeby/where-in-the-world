import { Link } from "react-router-dom";

export function Error() {
  return (
    <section className="flex flex-grow flex-col items-center justify-center gap-8 dark:bg-darkBlue dark:text-white">
      <h1 className="text-center text-5xl font-extrabold">Error 404</h1>
      <p className="text-center text-2xl font-semibold">
        Sorry, we couldn<>&apos;</>t find the page you were looking for.
      </p>
      <Link to="/" className="text-center text-2xl font-semibold hover:underline">
        Back to Home
      </Link>
    </section>
  );
}
