import fetch from "isomorphic-unfetch";

import { Layout } from "../blocks/layout";
import "../common/styles.less";

const Home = props => (
  <Layout>
    <h1>Home</h1>
    <p>Data:</p>
    <ul>{props.shows.map(({ id }) => <li key={id}>{id}</li>)}</ul>
  </Layout>
);

Home.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  console.log(data);

  return {
    shows: data
  };
};

export default Home;
