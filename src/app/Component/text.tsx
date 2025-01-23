import { motion } from "framer-motion";
import { Wire_One } from "next/font/google";

const font = Wire_One({
  subsets : ['latin'],
  weight : "400"
})

export const RevealLinks = () => {
  return (
    <section className={`grid place-content-center gap-2 ${font.className} px-8 py-24 text-yellow-500`}>
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface types {
  children : string,
  href : string
}

const FlipLink = ({ children, href } : types) => {
  return (
    <motion.a
      initial={{x:10, opacity:0}}
      whileInView={{x:0, opacity : 1}}
      transition={{duration:2, type: "spring", stiffness : 2000 }} //transition={{ duration: 1, type: "spring", stiffness: 200 }}>
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl md:text-5xl lg:text-7xl font-black uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "0%",
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
              },
              hovered: {
                y: "0%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};