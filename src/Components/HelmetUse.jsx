import PropTypes from "prop-types";

const HelmetUse = ({ name }) => {
  return (
    <HelmetUse>
      <title>InventiSync | {name}</title>
    </HelmetUse>
  );
};

HelmetUse.propTypes = {
  name: PropTypes.string,
};

export default HelmetUse;
