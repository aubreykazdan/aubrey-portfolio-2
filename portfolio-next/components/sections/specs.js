import Section from "../section";
import Heading from "../heading";

const BlockContent = require("@sanity/block-content-to-react");

export default function Specifications({ heading, specs, content }) {
  return (
    <Section fullHeight>
      {heading && <Heading children={heading} />}
      {specs &&
        specs.map((item) => {
          const { _key, name, value } = item;
          console.log(item);
          return (
            <div key={_key}>
              <div className="grid grid-cols-2 lg:gap-8 border-b py-1 max-w-4xl px-4 mx-auto text-xs text-gray-500 hover:text-gray-800">
                <div className="text-right pr-4">{name}</div>
                <div>{value}</div>
              </div>
            </div>
          );
        })}
      {content && (
        <div className="text-gray-500 max-w-4xl mx-auto px-8 mt-2 text-xs">
          <BlockContent blocks={content} />
        </div>
      )}
    </Section>
  );
}
