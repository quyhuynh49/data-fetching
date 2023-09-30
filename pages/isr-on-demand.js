import { YOUR_API_URL } from "../lib/api";

export default function IncrementalStaticRegenerationOnDemand({ data }) {
  
  function revalidate() {
    fetch("/api/revalidate");
  }

  return (
    <>
      <button onClick={() => revalidate()}>revalidate</button>
      <ul>
        {data?.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  );
}

/*  this function gets called at build time on server-side.
    it may be called again, on a serverless function, if
    the api endpoint e.g. api/revalidate get's pinged. 
*/

export async function getStaticProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
