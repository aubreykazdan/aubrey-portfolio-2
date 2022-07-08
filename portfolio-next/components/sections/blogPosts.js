import Section from "../section";
import Heading from "../heading";
import Post from "../post";

export default function BlogPosts({ _key, heading, posts }) {
  return (
    <Section fullHeight>
      <Heading children={heading} />
      <Post posts={posts} />
    </Section>
  );
}
