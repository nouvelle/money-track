import React from "react";
/* Component */
import Header from "./Header";
import Nav from "./Nav";

const Layout = props => {
  return (
    <div>
      <Header />
      <Nav page={props.page} />
      {props.children}
    </div>
  );
};

export default Layout;
