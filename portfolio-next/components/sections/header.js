import Headroom from "react-headroom";
import Link from "next/link";
import Logo from "../logo";
import SiteSocials from "../siteSocials";
import NavLink from "../navlink";
import { MobileMenu } from "../mobileMenu";

export default function Header({ logo, mainNav, socials }) {
  const { items } = mainNav;
  return (
    <Headroom>
      {/* <section className="bg-white p-6 relative z-1">
        <div className="container mx-auto uppercase font-bold text-xs items-center flex justify-between">
          <div className="flex items-center justify-center">
            <Link href="/">
              <a className="h-full w-full">
                <Logo logo={logo} />
              </a>
            </Link>
            <ul className="hidden lg:flex ml-8 tracking-wide">
              {items &&
                items.map((item) => {
                  const { external, internal, _key, heading } = item;
                  return (
                    <li className="mx-4" key={_key}>
                      {internal ? (
                        <NavLink
                          isInternal
                          href={
                            internal.slug.current == "home"
                              ? ""
                              : `/${internal.slug.current}`
                          }
                          children={heading}
                        />
                      ) : external ? (
                        <NavLink
                          isExternal
                          href={external}
                          children={heading}
                        />
                      ) : null}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="lg:flex space-x-2 hidden">
            <SiteSocials socials={socials} />
          </div>
          <div className="lg:hidden">
            <MobileMenu mainNav={mainNav} socials={socials} />
          </div>
        </div>
      </section> */}
    </Headroom>
  );
}
