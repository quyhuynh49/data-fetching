import { YOUR_API_URL } from "../lib/api";

export default function StaticSiteGeneration({ data }) {
  return (
    <ul>
      {data?.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
}

/*  this function gets called at build time on server-side,
    it's won't be called on client-side, so you can even do direct database queries.
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
