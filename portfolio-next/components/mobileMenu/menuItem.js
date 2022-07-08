import Link from "next/link";
import { motion } from "framer-motion";

export function MenuItem({ item, toggleOpen }) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const { external, internal, heading } = item;

  return (
    <motion.li variants={variants} className="mb-1">
      <motion.div
        whileHover={{ x: -5 }}
        whileTap={{ x: 5 }}
        className="font-bold text-right py-2"
      >
        {external ? (
          <a
            className="text-lg"
            href={external}
            rel="noreferer"
            target="_blank"
          >
            {heading}
          </a>
        ) : internal ? (
          <Link
            href={
              internal.slug.current == "home" ? "" : `/${internal.slug.current}`
            }
          >
            <a className="text-lg" onClick={toggleOpen}>
              {heading}
            </a>
          </Link>
        ) : null}
      </motion.div>
    </motion.li>
  );
}
