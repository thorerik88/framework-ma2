import PropTypes from "prop-types";

function UniItem({ name, web_pages }) {
  return (
    <div className="box">
      <h4>{name}</h4>
      <a href={web_pages}>{web_pages}</a>
    </div>
  );
}

UniItem.propTypes = {
  name: PropTypes.string.isRequired,
  web_pages: PropTypes.array.isRequired,
};

export default UniItem;