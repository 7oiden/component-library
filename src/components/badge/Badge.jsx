import PropTypes from "prop-types";
import classnames from "classnames";

export default function Badge({ children, variant, color = "default" }) {
  let variantClass = `badge__${variant.toLowerCase()}`;
  let colorClass = `badge--${color.toLowerCase()}`;

  const allClasses = classnames("badge", variantClass, colorClass);

  return <div className={allClasses}>{children}</div>;
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["square", "rounded"]),
  color: PropTypes.oneOf([
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
};
