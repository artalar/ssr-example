import fetch from "isomorphic-unfetch";

import { Layout } from "../blocks/layout";
import "../common/styles.less";

const Home = ({ data = [] }) => (
  <Layout>
    <h1>Home</h1>
    <p>Data:</p>
    <ul>{data.map(({ id }) => <li key={id}>{id}</li>)}</ul>
  </Layout>
);

Home.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  return { data };
};

export default Home;
