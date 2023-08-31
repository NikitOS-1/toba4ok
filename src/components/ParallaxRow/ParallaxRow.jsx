import "./ParallaxRow.css";

const ParallaxRow = ({
  imageUrl,
  title,
  description,
  revers = false,
  amination = false,
}) => {
  const styleBgImg = { backgroundImage: `url(${imageUrl})` };
  const styleVisible = {
    opacity: 1,
    transform: "translateY(0)",
  };
  const styleHidden = {
    opacity: 0,
    transform: 'translateY("-50px")',
  };

  return (
    <div
      className="parallax-wrap"
      style={
        amination
          ? {
              opacity: 1,
              transform: "translateY(20px)",
              transition: "opacity 1s ease, transform 1s ease",
            }
          : null
      }>
      <div className="parallax-row" style={styleBgImg}>
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
