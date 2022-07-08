import { getClient } from "../lib/sanity.server";
import {
  contactQuery,
  mainNavQuery,
  siteSettingsQuery,
  socialsQuery,
} from "../lib/queries";

export default function Contact({ page, settings, mainNav, socials }) {
  const { pageBuilder } = page;
  const { siteLogo, websiteTitle, twitterHandle, copyright } = settings;
  return (
    <div>
      {/* <Meta page={page} title={websiteTitle} twitter={twitterHandle} />
      <Header mainNav={mainNav} socials={socials} logo={siteLogo} /> */}
      <h1>This is the contact page</h1>
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const page = await getClient(preview).fetch(contactQuery);
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
