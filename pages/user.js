import useSWR from "swr";
import Unsplash from "../components/unsplash";

export default function User() {
  // const { data, error } = useSWR('/api/user/123', fetcher)
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  // render data
  return (
    <div>
      <p>Hello</p>
      <Unsplash />
    </div>
  );
}
