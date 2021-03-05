import { useState } from "react";
import { useSWRInfinite } from "swr";
import Container from "../components/Container";
import ImgCard from "../components/ImgCard";
import Sparkles from "../components/Sparkles";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 20;
const KEY = "XCBO8zFMaRQfr0qLU77eCHfzrHDpomBjH-lomBPs5Wo";

function UNGallery() {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `https://api.unsplash.com/users/ryoji__iwata/photos?client_id=${KEY}&per_page=${PAGE_SIZE}&page=${
        index + 1
      }`,
    fetcher
  );

  const photoList = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  const [open, setOpen] = useState("");

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-4">
        {photoList.map((photo) => (
          <ImgCard
            key={photo.id}
            id={photo.id}
            open={open}
            setOpen={setOpen}
            photo={photo}
          />
        ))}
      </div>
      <div className="mx-auto py-10 w-1/2 text-center">
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </>
          ) : isReachingEnd ? (
            "No More Photos"
          ) : (
            "Load More"
          )}
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Container title="Photos" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-3xl px-5 pt-safe-top mx-auto my-12">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          <Sparkles>Photos</Sparkles>
        </h1>
        <UNGallery />
      </div>
    </Container>
  );
}
