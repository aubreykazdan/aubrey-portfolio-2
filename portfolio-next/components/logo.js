export default function Logo({ logo }) {
  function createMarkup() {
    return { __html: `${logo}` };
  }
  return <div className="" dangerouslySetInnerHTML={createMarkup()}></div>;
}
