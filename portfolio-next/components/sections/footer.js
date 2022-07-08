import Section from "../section";

export default function Footer({}) {
  return (
    <Section fullHeight>
      <footer className="py-8 mt-10 text-xxs">
        <div className="mx-4 lg:mx-0 flex items-center justify-end border-t">
          © Aubrey Kazdan {new Date().getFullYear()}
        </div>
      </footer>
    </Section>
  );
}
