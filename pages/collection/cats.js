import Head from "next/head";
import Img from "../../components/Img";

export default function Cats() {
  return (
    <>
      <Head>
        <title>猫</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="max-w-xl px-6 ml-auto mr-0 lg:max-w-3xl lg:px-12 xl:max-w-5xl 2xl:max-w-7xl 2xl:px-24">
        <section className="mt-10 md:mt-16 lg:mt-20">
          <h1 className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
            猫
          </h1>
        </section>
        <section className="mt-10 md:mt-16 lg:mt-20">
          <Img
            type="left"
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
          />
          <Img
            type="right"
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
          />
          <Img
            type="center"
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
          />
          <Img
            type="left"
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
          />
          <Img
            type="full"
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
          />
        </section>
      </div>
    </>
  );
}
