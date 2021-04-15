import Container from "../components/Container";
import Image from "next/image";

export default function About() {
  return (
    <Container title="About" description="关于">
      <div className="lg:flex lg:justify-end lg:items-end">
        <section className="lg:w-1/4 mt-32 md:mt-16 lg:mt-20">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
            猫 <span className="animate-cat inline-block">🐱</span>
          </h1>
          <p className="mt-4">是一只可爱的猫咪</p>
        </section>
        <section className="lg:w-3/4 mt-10 md:mt-16 lg:mt-20">
          <Image
            src="/images/cats/1.jpg"
            width="5184"
            height="3456"
            alt="cat"
            layout="responsive"
          />
        </section>
      </div>
    </Container>
  );
}
