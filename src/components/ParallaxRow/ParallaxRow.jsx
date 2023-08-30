import "./ParallaxRow.css";

const ParallaxRow = ({ imageUrl, title, description }) => {
  const rowStyle = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="parallax-row" style={rowStyle}>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ParallaxRow;
