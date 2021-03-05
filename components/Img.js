import Image from "next/image";

export default function Img({ type, src, width, height }) {
  const styles = {
    left: "w-3/4",
    right: "w-3/4 ml-auto mr-0",
    center: "w-3/4 mx-auto",
    full: "w-full",
  };

  return (
    <div className="w-full mb-28 xl:mb-64">
      <div className={`${styles[type]} relative`}>
        <Image
          className="object-cover"
          src={src}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
    </div>
  );
}
