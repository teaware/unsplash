import Image from "next/image";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function ImgCard({ id, open, setOpen, photo }) {
  const isOpen = open === id;

  return (
    <AnimateSharedLayout type="crossfade">
      {Math.ceil(photo.height / photo.width) === 1 ? (
        <div
          className="h-40 row-span-1 rounded-md shadow-md cursor-pointer relative"
          onClick={() => setOpen(id)}
        >
          <Image
            className="rounded-md"
            src={photo.urls.regular}
            alt={photo.description}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div
          className="h-84 row-span-2 rounded-md shadow-md cursor-pointer relative"
          onClick={() => setOpen(id)}
        >
          <Image
            className="rounded-md"
            src={photo.urls.regular}
            alt={photo.alt_description}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10"
            key="content"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.div
              className="w-full h-screen bg-black"
              variants={mask}
            ></motion.div>
            <div
              className="fixed inset-0 w-full h-screen flex justify-center items-center overflow-y-scroll"
              onClick={() => setOpen("")}
            >
              <motion.div
                className="w-full max-w-screen-lg mx-auto py-5"
                variants={backVariants}
              >
                <motion.div
                  style={{ backgroundColor: `${photo.color}` }}
                  variants={imageVariants}
                >
                  <Image
                    src={photo.urls.full}
                    alt={photo.alt_description}
                    width={1080}
                    height={(1080 * photo.height) / photo.width}
                    layout="responsive"
                  />
                </motion.div>

                {photo.description ? (
                  <motion.div
                    className="text-gray-800 bg-white px-4 py-2 divide-y-2 divide-gray-500 divide-dotted"
                    variants={textVariants}
                  >
                    <p>{photo.description}</p>
                  </motion.div>
                ) : (
                  ""
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const easing = [0.175, 0.85, 0.42, 0.96];

const mask = {
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
  enter: {
    opacity: 0.75,
    transition: {
      duration: 0.5,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
};

const imageVariants = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    y: 0,
    delay: 0.5,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    delay: 0.5,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: easing,
    },
  },
};

const backVariants = {
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
