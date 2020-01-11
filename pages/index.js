import React from "react";
import { withRedux } from "../lib/redux";
/* Component */
import Input from "../components/Input";
import Layout from "../components/Layout";

const Home = () => (
  <Layout page={"Input"}>
    <Input />
  </Layout>
);

// export default Home;
export default withRedux(Home);
