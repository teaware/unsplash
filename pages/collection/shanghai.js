import Head from "next/head";
import Img from "../../components/Img";

export default function Shanghai() {
  return (
    <>
      <Head>
        <title>上海</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="max-w-xl px-6 ml-auto mr-0 lg:max-w-3xl lg:px-12 xl:max-w-5xl 2xl:max-w-7xl 2xl:px-24">
        <section className="mt-10 md:mt-16 lg:mt-20">
          <h1 className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
            上海
          </h1>
        </section>
        <section className="mt-10 md:mt-16 lg:mt-20">
          <Img
            type="left"
            src="/images/shang hai/1.jpg"
            width="2896"
            height="4344"
          />
          <Img
            type="right"
            src="/images/shanghai/1.jpg"
            width="2896"
            height="4344"
          />
          <Img
            type="center"
            src="/images/shanghai/1.jpg"
            width="2896"
            height="4344"
          />
          <Img
            type="left"
            src="/images/shanghai/1.jpg"
            width="2896"
            height="4344"
          />
          <Img
            type="full"
            src="/images/shanghai/1.jpg"
            width="2896"
            height="4344"
          />
        </section>
      </div>
    </>
  );
}
