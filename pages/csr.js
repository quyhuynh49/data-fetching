import { useEffect, useState } from "react";
import { YOUR_API_URL } from "../lib/api";

export default function ClientSideRendering() {
  const [results, setResults] = useState([]);

  async function getData() {
    const resp = await fetch(YOUR_API_URL);
    const data = await resp.json();
    setResults(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {results?.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  );
}
