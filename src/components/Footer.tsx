import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flow-root w-full shrink-0 bg-body pb-7.5 text-[0.8em] opacity-70 desktop:mx-auto desktop:max-w-300 desktop:p-0">
      <div className="pt-2.5 text-center desktop:float-left desktop:p-5">
        <a
          href="https://github.com/schouffy/gamedev-portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Portfolio
        </a>{" "}
        by schouffy
      </div>
      <div className="pt-2.5 text-center desktop:float-right desktop:p-5">
        Reach me at{" "}
        <a href="mailto:sargissargsyan@icloud.com">sargissargsyan@icloud.com</a>{" "}
        or <Link to="/contact/">through here</Link>
      </div>
    </footer>
  );
}
