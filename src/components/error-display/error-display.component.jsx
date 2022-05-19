import "./error-display.styles.scss";

const ErrorDisplay = ({ error }) => {
  return <p className="error">{error}</p>;
};

export default ErrorDisplay;
