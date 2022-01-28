import UniList from "./university/UniList";
import Heading from "../layout/Heading";

function home() {
  return (
    <>
      <Heading heading={"List of Universities"}/>
      <UniList />
    </>
  );
}

export default home;
