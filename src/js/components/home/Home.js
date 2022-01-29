import UniList from "./UniList";
import Heading from "../layout/Heading";

function Home() {
  return (
    <>
      <Heading heading={"List of Universities"}/>
      <div className="uni-wrapper">
        <UniList />
      </div>
    </>
  );
}

export default Home;
