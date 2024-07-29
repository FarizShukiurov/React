
import Slider from "react-slick";
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Header = ({products}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    return (
        <div>
            <div className="banner">
                <img src="https://www.techweekmag.com/wp-content/uploads/2022/07/How-to-Build-a-1000-Gaming-PC-1.jpg" alt=""/>
                <div className="banner-content">
                    <h1>Welcome to NAMIK-MARKET</h1>
                    <div className="banner-buttons">
                        <Link to= '/about'><button className="white-but">About Us</button></Link>
                        <Link to= '/news'><button className="gray-but">News</button></Link>
                    </div>
                </div>
            </div>
            <div className="products">
                <h1>Откройте для себя последние инновации</h1>
                <p><p>Наши товары представляют передовые технологии и современный дизайн, которые удовлетворят любые потребности. Мы предлагаем продукцию, созданную с учетом новейших тенденций и стандартов качества, чтобы обеспечить вам лучшее.</p></p>
            </div>
            <Slider className="slider" {...settings}>
                {products.map(product => (
                    <div key={product.id}>
                        <img className="slider-image" src={product.image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Header;