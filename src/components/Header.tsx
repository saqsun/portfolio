import { NavLink } from "react-router";

const navigation = [
  { label: "About", href: "/" },
  { label: "Games", href: "/games/" },
  { label: "Ads", href: "/ads/" },
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/contact/" },
] as const;

export default function Header() {
  return (
    <header className="w-full desktop:mx-auto desktop:max-w-300">
      <nav
        className="primary-navigation p-5 text-right leading-[2em]"
        aria-label="Primary"
      >
        {navigation.map(({ label, href }) => (
          <NavLink
            className="mx-1.5 inline-block whitespace-nowrap pb-0 uppercase desktop:mx-3.75 desktop:pb-2"
            end={href === "/"}
            key={href}
            to={href}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
