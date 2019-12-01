import Layout from "../components/Layout";
import Test from "../components/Test";
import TODO from "../components/todo/TODO";

// TODO: create sidebar on the right of all code routes in layout
const Home = () => (
  <Layout>
    <Test />
    <TODO />
  </Layout>
);

export default Home;
