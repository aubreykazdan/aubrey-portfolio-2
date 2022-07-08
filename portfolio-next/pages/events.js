import { getClient } from "../lib/sanity.server";
import {
  eventsQuery,
  mainNavQuery,
  siteSettingsQuery,
  socialsQuery,
} from "../lib/queries";
import Meta from "../components/meta";
import Text from "../components/sections/twi";
import Hero from "../components/sections/hero";
import EventsList from "../components/sections/eventsList";
import CallToAction from "../components/sections/cta";
import Specifications from "../components/sections/specs";
import Header from "../components/sections/header";
import Gallery from "../components/sections/gallery";
import CardsGrid from "../components/sections/cardsGrid";
import Timeline from "../components/sections/timeline";
import Team from "../components/sections/team";
import Faq from "../components/sections/faq";
import Form from "../components/sections/form";
import BlogPosts from "../components/sections/blogPosts";

export default function Events({ page, settings, mainNav, socials }) {
  const { pageBuilder } = page;
  const { siteLogo, websiteTitle, twitterHandle, copyright } = settings;
  return (
    <div>
      <Meta page={page} title={websiteTitle} twitter={twitterHandle} />
      <Header mainNav={mainNav} socials={socials} logo={siteLogo} />
      {pageBuilder
        ? pageBuilder.map((section) => {
            let el = null;
            const {
              _key,
              _type,
              heading,
              subtitle,
              image,
              alt,
              imageGallery,
              video,
              cards,
              specs,
              content,
              events,
              timelineEvents,
              tagline,
              external,
              internal,
              label,
              form,
              posts,
            } = section;
            // console.log(settings);

            switch (_type) {
              case "hero":
                el = (
                  <Hero
                    key={_key}
                    heading={heading}
                    tagline={tagline}
                    content={content}
                    images={imageGallery}
                    video={video}
                  />
                );
                break;
              case "textWithIllustration":
                el = (
                  <Text
                    key={_key}
                    heading={heading}
                    content={content}
                    tagline={tagline}
                    image={image}
                    alt={alt}
                  />
                );
                break;
              case "eventsList":
                el = (
                  <EventsList
                    key={_key}
                    heading={heading}
                    subtitle={subtitle}
                    events={events}
                  />
                );
                break;
              case "cta":
                el = (
                  <CallToAction
                    key={_key}
                    heading={heading}
                    external={external}
                    internal={internal}
                  />
                );
                break;
              case "gallery":
                el = (
                  <Gallery key={_key} heading={heading} images={imageGallery} />
                );
                break;
              case "cardsList":
                el = <CardsGrid key={_key} heading={heading} cards={cards} />;
                break;
              case "specsList":
                el = (
                  <Specifications
                    key={_key}
                    heading={heading}
                    specs={specs}
                    content={content}
                  />
                );
                break;
              case "timeline":
                el = (
                  <Timeline
                    key={_key}
                    heading={heading}
                    events={timelineEvents}
                  />
                );
                break;
              case "team":
                el = (
                  <Team
                    key={_key}
                    heading={heading}
                    content={content}
                    cards={cards}
                  />
                );
                break;
              case "faq":
                el = <Faq key={_key} heading={heading} cards={cards} />;
                break;
              case "form":
                el = (
                  <Form
                    key={_key}
                    heading={heading}
                    label={label}
                    formType={form}
                  />
                );
                break;
              case "blog":
                el = <BlogPosts key={_key} heading={heading} posts={posts} />;
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
  const page = await getClient(preview).fetch(eventsQuery);
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
