import BlockContent from "@sanity/block-content-to-react";
import Section from "../section";
import Slide from "../slide";
import Heading from "../heading";

export default function Text({
  heading,
  content,
  tagline,
  image,
  alt,
  width,
  height,
}) {
  return (
    <Section fullHeight>
      <div className="flex flex-col items-center text-left m-10 ">
        <Heading children={heading} />
        {tagline && <span className="pt-4">{tagline}</span>}
        {content && <BlockContent blocks={content} />}
      </div>
      <div className="mx-10">
        {image && (
          <Slide asset={image} alt={alt} width={width} height={height} />
        )}
      </div>
    </Section>
  );
}
