import { YOUR_API_URL } from "../lib/api";

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <ul>
      {data?.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
}

/*  this function gets called at build time on server-side,
    it may be called again, on a serverless function, if revalidation is enabled and a new request comes in
*/

export async function getStaticProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },

    /*  next.js will attempt to re-generate the page:
          - when a request comes in
          - at most once every second 
      */
    revalidate: 10, // in seconds
  };
}
