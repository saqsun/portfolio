const contacts = [
  {
    icon: "fa-envelope-o",
    href: "mailto:sargissargsyan@icloud.com",
    label: "sargissargsyan@icloud.com",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/saqsun/",
    label: "linkedin.com/saqsun",
  },
  {
    icon: "fa-telegram",
    href: "https://www.t.me/saqsun/",
    label: "t.me/saqsun",
  },
  {
    icon: "fa-github",
    href: "https://github.com/saqsun",
    label: "github.com/saqsun",
  },
] as const;

export default function Contact() {
  return (
    <div className="mx-auto max-w-200">
      <h1>Let&apos;s get in touch</h1>

      <div className="mb-10">
        Open to Senior and Lead opportunities in HTML5 gaming, interactive
        products, and frontend platforms. Feel free to get in touch about a
        role, a project, or anything related to engineering and game
        development.
      </div>

      <ul className="list-none ps-0 desktop:ps-10">
        {contacts.map(({ icon, href, label }) => (
          <li
            className="text-[1.2em] leading-[1.8em] desktop:text-[1.4em] desktop:leading-[2em]"
            key={href}
          >
            <i className={`fa ${icon} fa-lg fa-fw mr-5`} />
            <a href={href} rel="noreferrer" target="_blank">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
