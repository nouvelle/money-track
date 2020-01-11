import React from "react";

const param = date => {
  return (
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2)
  );
};

const today = param(new Date());

const links = [
  { href: "/", label: "Input" },
  { href: `/daily?date=${today}`, label: "Daily" },
  { href: "/monthly", label: "Monthly" },
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
            <li key={key} className="selected">
              <a href={href}>{label}</a>
            </li>
          ) : (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
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
