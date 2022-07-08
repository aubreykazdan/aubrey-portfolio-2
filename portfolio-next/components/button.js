import { motion } from "framer-motion";

export default function Button({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <button className="mt-4 p-2 w-20 bg-black text-white" type="submit">
        {children}
      </button>
    </motion.div>
  );
}
