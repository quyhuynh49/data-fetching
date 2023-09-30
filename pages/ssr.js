import { YOUR_API_URL } from "../lib/api";

export default function ServerSideRendering({ data }) {
  return (
    <ul>
      {data?.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();
  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
