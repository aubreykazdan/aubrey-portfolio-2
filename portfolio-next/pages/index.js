import { getClient } from "../lib/sanity.server";
import {
  homeQuery,
  mainNavQuery,
  siteSettingsQuery,
  socialsQuery,
} from "../lib/queries";
import Project from "../components/sections/project";
import Header from "../components/sections/header";
import Meta from "../components/meta";

export default function Home({ page, settings, mainNav, socials }) {
  const { pageBuilder } = page;
  const { siteLogo, websiteTitle, twitterHandle, copyright } = settings;
  return (
    <div>
      <Meta page={page} title={websiteTitle} twitter={twitterHandle} />
      <Header mainNav={mainNav} socials={socials} logo={siteLogo} />
      {pageBuilder
        ? pageBuilder.map((section) => {
            let el = null;

            switch (_type) {
              case "hero":
                el = <Project key={_key} />;
                break;

              default:
                el = null;
            }
            return el;
          })
        : null}
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const page = await getClient(preview).fetch(homeQuery);
  const settings = await getClient(preview).fetch(siteSettingsQuery);
  const mainNav = await getClient(preview).fetch(mainNavQuery);
  const socials = await getClient(preview).fetch(socialsQuery);

  return {
    props: {
      page,
      settings,
      mainNav,
      socials,
      preview,
    },
  };
}
