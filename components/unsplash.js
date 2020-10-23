import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Unsplash() {
  const { data } = useSWR("/api/unsplash", fetcher);

  const downloads = data?.downloads;
  const views = data?.views;

  return (
    <>
      <div>{downloads}</div>
      <div>{views}</div>
    </>
  );
}
