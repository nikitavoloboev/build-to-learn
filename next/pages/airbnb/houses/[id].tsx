import Head from "next/head";
import DateRangePicker from "../../../components/airbnb/DateRangePicker";
import Layout from "../../../components/airbnb/Layout";

const House = props => (
  <Layout
    content={
      <div className="container">
        <Head>
          <title>{props.house.title}</title>
        </Head>
        <article>
          <img src={props.house.picture} width="100%" alt="House picture" />
          <p>
            {props.house.type} - {props.house.town}
          </p>
          <p>{props.house.title}</p>
          <p>
            {props.house.rating} ({props.house.reviewsCount})
          </p>
        </article>
        <aside>
          <h2>Add dates for prices</h2>
          <DateRangePicker />
        </aside>

        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 60% 40%;
            grid-gap: 30px;
          }

          aside {
            border: 1px solid #ccc;
            padding: 20px;
          }
        `}</style>
      </div>
    }
  />
);

House.getInitialProps = ({ query }) => {
  const { id } = query;

  return {
    // house: houses.filter(house => house.id === id)[0]
  };
};

export default House;
