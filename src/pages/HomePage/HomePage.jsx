import { useEffect, useState } from "react";
import "./HomePage.scss";

const HomePage = () => {
  const img1 = process.env.PUBLIC_URL + "/images/kalyan1.jpg";

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.screenY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundSize = 100 + scrollPosition / 5;

  return (
    <div className="container">
      <div className="wrap_paralax">
        <div className="row1">
          <div
            className="picture_paralax"
            style={{
              backgroundImage: `url(${img1})`,
              // backgroundSize: `${backgroundSize}%`,
            }}></div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            accusamus id voluptatibus? Distinctio velit libero recusandae veniam
            eligendi saepe excepturi placeat nemo obcaecati? Modi, laudantium
            delectus! Cupiditate quod quae iste. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam accusamus id voluptatibus?
            Distinctio velit libero recusandae veniam eligendi saepe excepturi
            placeat nemo obcaecati? Modi, laudantium delectus! Cupiditate quod
            quae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam accusamus id voluptatibus? Distinctio velit libero recusandae
            veniam eligendi saepe excepturi placeat nemo obcaecati? Modi,
            laudantium delectus! Cupiditate quod quae iste.
          </div>
        </div>
        <div className="row2">
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            accusamus id voluptatibus? Distinctio velit libero recusandae veniam
            eligendi saepe excepturi placeat nemo obcaecati? Modi, laudantium
            delectus! Cupiditate quod quae iste. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam accusamus id voluptatibus?
            Distinctio velit libero recusandae veniam eligendi saepe excepturi
            placeat nemo obcaecati? Modi, laudantium delectus! Cupiditate quod
            quae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam accusamus id voluptatibus? Distinctio velit libero recusandae
            veniam eligendi saepe excepturi placeat nemo obcaecati? Modi,
            laudantium delectus! Cupiditate quod quae iste.
          </div>
          <div className="picture_paralax"></div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
