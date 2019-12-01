import Head from "next/head";

const Test = () => {
  return <div></div>;
};

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>{props.children}</div>
      <Test />
    </div>
  );
};

export default Layout;
