import { useEffect, useRef, useState } from "react";
import ParallaxRow from "../../components/ParallaxRow/ParallaxRow";
import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

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
  let welcome1 = "Welcome to the shop Toba4ok_UA";
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

      <div className="wrap_carousel_top_sales">
        <div className="title_top_sales">
          <h1>Top Sales</h1>
        </div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
          style={{ margin: "70px 0px" }}
          slidesPerView={5}
          spaceBetween={10}>
          <SwiperSlide>
            <img src="/images/tobac_brand/DailyHookah-160x120.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/absolem_kupit_tabak---160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/tabak_swipe_kupit-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/afzaL-160x120.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/daim-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/dead-horse-kupit-tabak-new-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/kupit-tabak-dlya-kalyana-4-20-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/tabak-5ive-kupit-160x120.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/Kupit'-tabak-dlja-kal'jana-Tangiers-160x120.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/tabak-spectrum-obzor-vkusy-tsena-160x120.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/serbetli-tabak-kupit-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/tabak-nual-160x120.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/tobac_brand/Molfar-160x120.png" />
          </SwiperSlide>
        </Swiper>
      </div>

      <ParallaxRow imageUrl={img2} title={welcome2} description={text2} />
    </div>
  );
};
export default HomePage;
