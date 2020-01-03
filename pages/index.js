import React from "react";
import { withRedux } from "../lib/redux";
/* Component */
import Input from "../components/input";

const Home = () => (
  <>
    <Input />
  </>
);

// export default Home;
export default withRedux(Home);
