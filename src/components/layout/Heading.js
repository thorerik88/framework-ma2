import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

function Heading( { heading } ) {
  return (
    <Router>
      <h1>{heading}</h1>
    </Router>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
