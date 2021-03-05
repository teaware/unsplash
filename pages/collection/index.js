import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";

export default function Home() {
  return (
    <Container title="选辑" description="我爱大自然精选辑">
      <section className="mt-32 md:mt-16 lg:mt-20">
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
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
    </Container>
  );
}

function SectionTitle({ link, children }) {
  const T = ({ children }) => (
    <h2 className="text-2xl md:text-2xl lg:text-2-5xl">{children}</h2>
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
