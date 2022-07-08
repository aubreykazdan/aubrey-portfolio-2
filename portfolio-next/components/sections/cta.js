import NavLink from "../navlink";

export default function CallToAction({ heading, external, internal }) {
  return (
    <div>
      {internal && (
        <NavLink href={internal.slug} children={heading} isInternal />
      )}
      {external && <NavLink href={external} children={heading} isExternal />}
    </div>
  );
}
