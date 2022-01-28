import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

function UniItem({ name, web_pages }) {
  return (
    <Router>
      <div>
        <h4>{name}</h4>
        <a href={web_pages}>{web_pages}</a>
        {console.log(web_pages)}
      </div>
    </Router>
  );
}

UniItem.propTypes = {
  name: PropTypes.string.isRequired,
  web_pages: PropTypes.array.isRequired,
};

export default UniItem;