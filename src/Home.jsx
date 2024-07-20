
import Slider from "react-slick";
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Header = ({products}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
    return (
        <div>
            <div className="banner">
                <img src="https://notebookmerkezi.com.tm/web/upload/store/Pages/Page1/57d75a.jpg" alt=""/>
                <div className="banner-content">
                    <h1>Welcome to NAMIK-MARKET</h1>
                    <div className="banner-buttons">
                        <button className="white-but">Login</button>
                        <button className="gray-but">Reg</button>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
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