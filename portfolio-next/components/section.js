import classNames from "classnames";

export default function Section({
  fullWidth = false,
  fullHeight = false,
  className = "text-center",
  children,
}) {
  const sectionClass = classNames({
    "my-32": !fullHeight,
    "container mx-auto": !fullWidth,
    [className]: true,
  });
  return <section className={sectionClass}>{children}</section>;
}
