import Head from "next/head";

const test = () => {};

const Layout = props => {
  // test();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}
      <div className="main">{props.children}</div>

      <style jsx>
        {`
          .main {
            display: flex
            flex-direction: column
          }
        `}
      </style>

      {/* <style jsx global>{`
        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
        }
      `}</style>

      <style jsx>{`
        main {
          position: relative;
          max-width: 56em;
          background-color: white;
          padding: 2em;
          margin: 0 auto;
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
};

export default Layout;
