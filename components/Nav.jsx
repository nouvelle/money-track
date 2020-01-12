import React from "react";
import Link from "next/link";
import moment from "moment";

const today = moment().format("YYYYMMDD");
const thisMonth = moment().format("YYYYMM");

const links = [
  { href: "/", label: "Input" },
  {
    href: `/daily?date=${today}`,
    label: "Daily"
  },
  {
    href: `/monthly?date=${thisMonth}`,
    label: "Monthly"
  },
  { href: "/login", label: "Login" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => {
  console.log(props);
  return (
    <nav>
      <ul>
        {links.map(({ key, href, label }) =>
          props.page === label ? (
            <Link key={key} href={href}>
              <li className="selected">
                <a>{label}</a>
              </li>
            </Link>
          ) : (
            <Link key={key} href={href}>
              <li>
                <a>{label}</a>
              </li>
            </Link>
          )
        )}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Concert One", cursive;
        }
        nav {
          text-align: center;
          box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.1);
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 10px 20px;
          margin: 0 auto;
          max-width: 640px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #666;
          text-decoration: none;
          font-size: 16px;
        }
        .selected a {
          color: #067df7;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
