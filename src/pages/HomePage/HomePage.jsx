import { useEffect, useState } from "react";
import ParallaxRow from "../../components/ParallaxRow/ParallaxRow";
import "./HomePage.scss";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => setIsVisible(false);
  }, []);

  const img1 = process.env.PUBLIC_URL + "/images/kalyan1.jpg";
  const img2 = process.env.PUBLIC_URL + "/images/kalyan2.jpg";
  let welcome1 = "Welcome to Toba4ok_UA";
  let welcome2 = "Welcome to the world of true aroma";
  let text1 =
    "Welcome to our online store for hookah tobaccos! We take pride in presenting you with a wide range of high-quality tobaccos of various flavors and varieties. Our team carefully selects products from trusted manufacturers to offer you the best selection.You'll find everything you need for an authentic hookah experience, from classic options with subtle fruity notes to refined blends with pleasant herbal undertones. We also offer hookah accessories to help you create a cozy atmosphere for enjoyable moments.We'll be delighted to assist you in choosing the perfect tobacco for your hookah. When you shop with us, you get quality products and a reliable partner. Enjoy every puff with us!";

  let text2 =
    "Your hookah deserves the best - and we're ready to provide just that! Our online store specializes in selling high-quality hookah tobaccos, crafted with a passion for every detail. We care about your pleasure and offer a rich variety of aromas and blends. You'll find everything you need for hookah smoking: from splendid fruit compositions to unique options with original flavors. Each of our products is the result of the finest craftsmanship and a careful selection of quality components.By choosing us, you're choosing reliability and excellence. We're prepared to give you unforgettable moments of hookah smoking pleasure. Welcome to the world of true aroma!";

  return (
    <div className={`container ${isVisible ? "visible" : "hidden"}`}>
      <ParallaxRow
        imageUrl={img1}
        title={welcome1}
        description={text1}
        revers={true}
      />
      <div style={{ textAlign: "center", margin: "40px" }}>
        ------------TOP SALES------------
      </div>
      <ParallaxRow imageUrl={img2} title={welcome2} description={text2} />
    </div>
  );
};
export default HomePage;
