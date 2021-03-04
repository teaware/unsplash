import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>选辑</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="max-w-xl px-6 ml-auto mr-0 lg:max-w-3xl lg:px-12 xl:max-w-5xl 2xl:max-w-7xl 2xl:px-24">
        <section className="mt-10 md:mt-16 lg:mt-20">
          <h1 className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
            选辑
          </h1>
        </section>
        <section className="mt-10 md:mt-16 lg:mt-20">
          <SectionTitle link="/collection/shanghai">上海</SectionTitle>
          <h3 className="mt-4 mb-12">
            中国唯一的<span className="italic line-through">现代化</span>城市
          </h3>
          {/* <div className="mt-2 md:mt-4 lg:mt-6">
            <p>一两句文字介绍</p>
            <p className="mt-6">没有也可以</p>
          </div> */}
          <Link href="/collection/shanghai">
            <a>
              <Image
                className="object-cover w-full h-full xl:rounded-lg"
                src="/images/shanghai/1.jpg"
                width="2896"
                height="4344"
              />
            </a>
          </Link>
        </section>

        <section className="mt-10 md:mt-16 lg:mt-20">
          <SectionTitle link="/collection/cats">猫</SectionTitle>
          <h3 className="mt-4 mb-12">
            地球上<strong className="underline">最可爱</strong>的物种
          </h3>
          <Link href="/collection/cats">
            <a>
              <Image
                className="object-cover w-full h-full xl:rounded-lg"
                src="/images/cats/1.jpg"
                width="5184"
                height="3456"
              />
            </a>
          </Link>
        </section>

        <div className="mt-32" />
      </div>
    </>
  );
}

function Container({ size, children }) {
  let styles = {
    small: "max-w-sm mx-auto px-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl", // Home
    some: "max-w-xl px-6 mx-auto lg:max-w-3xl lg:px-0", // Podcast, Blog index
    measure: "max-w-measure mx-auto", // Blog post
    large: "max-w-2xl px-6 mx-auto md:max-w-xl", // Projects
  };

  return <div className={styles[size]}>{children}</div>;
}

function Section({ children }) {
  return <section className="mt-10 md:mt-16 lg:mt-20">{children}</section>;
}

function SectionTitle({ link, children }) {
  const T = ({ children }) => (
    <h2 className="text-2xl text-gray-900 md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  );

  if (link) {
    return (
      <Link href={link}>
        <a className="inline-block">
          <T>{children}</T>
        </a>
      </Link>
    );
  } else {
    return <T>{children}</T>;
  }
}

function SectionBody({ children }) {
  return <div className="mt-2 md:mt-4 lg:mt-6">{children}</div>;
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          ></polygon>
        </g>
      </g>
    </svg>
  );
}

function ImageCard({ src, title, date, width, height }) {
  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-gradient-to-t from-black.85 xl:bg-none xl:static xl:text-gray-900 xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-gray-700">{date}</p>
      </div>
    </div>
  );
}
