import { useEffect, useState } from "react";
import ParallaxRow from "../../components/ParallaxRow/ParallaxRow";
import "./HomePage.scss";

const HomePage = () => {
  const img1 = process.env.PUBLIC_URL + "/images/kalyan1.jpg";
  const img2 = process.env.PUBLIC_URL + "/images/kalyan2.jpg";
  let text1 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque ducimus quia labore debitis quod. Doloremque repellat perferendis, fugit porro, aliquid placeat laudantium debitis voluptatum incidunt assumenda pariatur saepe provident orem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque ducimus quia labore debitis quod. Doloremque repellat perferendis, fugit porro, aliquid placeat laudantium debitis voluptatum incidunt assumenda pariatur saepe provident";

  return (
    <div className="container">
      <ParallaxRow
        imageUrl={img1}
        title="Заголовок"
        description={text1}
        revers={true}
      />
      <ParallaxRow
        imageUrl={img2}
        title="Заголовок 1"
        description={text1 + text1 + text1}
      />
    </div>
  );
};
export default HomePage;
