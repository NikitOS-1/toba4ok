import "./ParallaxRow.css";

const ParallaxRow = ({ imageUrl, title, description, revers = false }) => {
  const rowStyle = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="parallax-wrap">
      <div className="parallax-row" style={rowStyle}>
        <div
          className="content"
          style={revers ? { marginLeft: "40%" } : { marginRight: "40%" }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ParallaxRow;
