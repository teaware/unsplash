import Img from "../../components/Img";
import Container from "../../components/Container";

export default function Cats() {
  return (
    <Container title="猫" description="猫选辑的描述">
      <section className="mt-32 md:mt-16 lg:mt-20">
        <h1 className="text-4xl leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
          猫 <span className="animate-cat inline-block">🐱</span>
        </h1>
      </section>
      <section className="mt-10 md:mt-16 lg:mt-20">
        <Img type="left" src="/images/cats/1.jpg" width="5184" height="3456" />
        <Img type="right" src="/images/cats/2.jpg" width="3780" height="5463" />
        <Img
          type="center"
          src="/images/cats/3.jpg"
          width="5522"
          height="4015"
        />
        <Img type="left" src="/images/cats/4.jpg" width="3024" height="4032" />
        <Img type="full" src="/images/cats/5.jpg" width="4507" height="3456" />
        <Img type="right" src="/images/cats/6.jpg" width="4000" height="6000" />
      </section>
    </Container>
  );
}
