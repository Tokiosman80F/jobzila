import PropTypes from "prop-types";

const Heading = ({ subHeading, mainHeading, textAlign = "center" }) => {
  return (
    <div className={`text-${textAlign} my-6`}>
      <h2 className="text-primary-color font-medium text-xl md:text-2xl mb-2">
        {subHeading}
      </h2>
      <h2 className=" text-5xl md:text-4xl font-medium">{mainHeading}</h2>
    </div>
  );
};
// Prop Validation
Heading.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export default Heading;
