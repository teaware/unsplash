import Image from "next/image";
import { useState } from "react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Img({ type, src, width, height }) {
  const styles = {
    left: "w-3/4",
    right: "w-3/4 ml-auto mr-0",
    center: "w-3/4 mx-auto",
    full: "w-full",
  };
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="w-full mb-28 xl:mb-64">
      <div className={`${styles[type]} relative`}>
        <Image
          src={src}
          width={width}
          height={height}
          className={cn(
            "duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
