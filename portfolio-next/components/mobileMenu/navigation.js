import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { MenuItem } from "./menuItem";
import SiteSocials from "../siteSocials";

export function Navigation({ isOpen, toggleOpen, mainNav, socials }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      opacity: 1,
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      opacity: 0,
    },
  };

  const { items } = mainNav;

  return (
    isOpen && (
      <RemoveScroll>
        <motion.ul
          variants={variants}
          className={`fixed top-0 right-0 h-screen w-full px-4 pt-4 md:pt-16 bg-white`}
          style={{ paddingTop: "4rem" }}
        >
          <div className="container mx-auto">
            {items &&
              items.map((item) => {
                return (
                  <MenuItem
                    key={item._key}
                    item={item}
                    toggleOpen={toggleOpen}
                  />
                );
              })}
            <SiteSocials socials={socials} />
          </div>
        </motion.ul>
      </RemoveScroll>
    )
  );
}
