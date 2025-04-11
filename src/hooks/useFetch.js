import { useEffect, useState } from "react";

export function useFetch(url, options) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal, ...options })
			.then((res) => {
				if (!res.ok) {
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

				setIsPending(false);
				setError(err.message);
			});

		return () => abortCont.abort();
	}, [url, options]);

	return { data, isPending, error };
}
