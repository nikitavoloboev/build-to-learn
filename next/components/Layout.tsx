import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
