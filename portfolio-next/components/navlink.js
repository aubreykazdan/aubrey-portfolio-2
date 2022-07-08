import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ href, children, isExternal, isInternal }) {
  const router = useRouter();
  return (
    <div>
      {isInternal ? (
        <Link href={href}>
          <a rel="noreferrer">
            <style jsx>{`
              a {
                position: relative;
              }
              a:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                bottom: -1px;
                left: 0;
                background-color: #000;
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out 0s;
              }
              a:hover::before,
              a.active:before {
                visibility: visible;
                transform: scaleX(1);
              }
            `}</style>
            {children}
          </a>
        </Link>
      ) : isExternal ? (
        <a href={href} rel="noreferrer" target="_blank">
          <style jsx>{`
            a {
              position: relative;
            }
            a:before {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: -1px;
              left: 0;
              background-color: #000;
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.3s ease-in-out 0s;
            }
            a:hover::before,
            a.active:before {
              visibility: visible;
              transform: scaleX(1);
            }
          `}</style>
          {children}
        </a>
      ) : null}
    </div>
  );
}
