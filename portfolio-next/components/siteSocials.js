import { motion } from "framer-motion";
import {
  Twitter,
  Spotify,
  Facebook,
  Instagram,
  Discord,
  YouTube,
  Snapchat,
  Soundcloud,
  TikTok,
} from "./socialIcons";

export default function SiteSocials({ socials }) {
  const {
    discord,
    facebook,
    instagram,
    snapchat,
    soundcloud,
    spotify,
    tiktok,
    twitter,
    youtube,
  } = socials;
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

  return (
    <motion.div
      variants={variants}
      className="flex space-x-6 justify-end lg:mt-0 text-2xl"
    >
      {discord && <Discord url={discord} isHeader />}

      {twitter && <Twitter url={twitter} isHeader />}

      {instagram && <Instagram url={instagram} isHeader />}

      {spotify && <Spotify url={spotify} isHeader />}

      {snapchat && <Snapchat url={snapchat} isHeader />}

      {soundcloud && <Soundcloud url={soundcloud} isHeader />}

      {tiktok && <TikTok url={tiktok} isHeader />}

      {youtube && <YouTube url={youtube} isHeader />}

      {facebook && <Facebook url={facebook} isHeader />}
    </motion.div>
  );
}
