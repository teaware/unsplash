import Img from "../../components/Img";
import Container from "../../components/Container";

export default function Shanghai() {
  return (
    <Container title="上海" description="上海选辑的描述">
      <section className="mt-32 md:mt-16 lg:mt-20">
        <h1 className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl">
          上海
        </h1>
      </section>
      <section className="mt-10 md:mt-16 lg:mt-20">
        <Img
          type="left"
          src="/images/shanghai/5.jpg"
          width="2832"
          height="4240"
        />
        <Img
          type="right"
          src="/images/shanghai/2.jpg"
          width="2208"
          height="3925"
        />
        <Img
          type="center"
          src="/images/shanghai/3.jpg"
          width="6083"
          height="4059"
        />
        <Img
          type="left"
          src="/images/shanghai/4.jpg"
          width="2884"
          height="3992"
        />
        <Img
          type="full"
          src="/images/shanghai/1.jpg"
          width="2896"
          height="4344"
        />
        <Img
          type="right"
          src="/images/shanghai/6.jpg"
          width="8429"
          height="4832"
        />
      </section>
    </Container>
  );
}
