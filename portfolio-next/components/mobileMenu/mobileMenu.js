import { motion, useCycle } from "framer-motion";
import { Navigation } from "./navigation";
import { MenuToggle } from "./menuToggle";

export function MobileMenu({ socials, mainNav }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`lg:hidden flex items-center flex-col justify-center md:mb-12`}
    >
      <Navigation
        mainNav={mainNav}
        socials={socials}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
