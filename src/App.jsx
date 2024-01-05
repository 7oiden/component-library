import "./sass/styles.scss";
import Badge from "./components/badge/Badge";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="wrapper">
      <Badge variant="square" color="purple">
        This is my badge
      </Badge>
      <Banner status="success" heading="Congratulations!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="error" heading="An error occurred"></Banner>
      <Banner status="info" heading="Update available">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
    </div>
  );
}

export default App;
