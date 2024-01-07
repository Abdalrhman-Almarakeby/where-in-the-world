import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal, ...options })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;

          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url, options]);

  return { data, isPending, error };
}
