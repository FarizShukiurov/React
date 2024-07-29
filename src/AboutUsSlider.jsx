import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AboutUsSlider.css';

const videoData = [
  { id: 1, src: "src/assets/nv-brochure-2023-08-slide04.mp4", title: "Добро пожаловать!", description: "Добро пожаловать в наш магазин компьютерной техники! Мы гордимся тем, что предлагаем широкий ассортимент высококачественной компьютерной техники от ведущих мировых производителей. Наши специалисты всегда готовы помочь вам выбрать наиболее подходящее оборудование, которое будет соответствовать всем вашим потребностям и требованиям." },
  { id: 2, src: "src/assets/nv-brochure-2023-08-slide07 (1).mp4", title: "Доставка", description: "Наш магазин был основан в 2005 году, и с тех пор мы неизменно придерживаемся высоких стандартов обслуживания клиентов. Мы предлагаем конкурентоспособные цены, гибкие условия оплаты и доставку по всей стране." },
  { id: 3, src: "src/assets/nv-brochure-2023-08-slide06.mp4", title: "Наша миссия", description: "Наша миссия - предоставить каждому клиенту высококачественные продукты и услуги, которые помогут им достичь успеха в цифровом мире. Мы стремимся быть надежным партнером в области компьютерной техники, предлагая инновационные решения и превосходное обслуживание." },
  { id: 4, src: "src/assets/nv-brochure-2023-08-slide05.mp4", title: "Наша команда", description: "Наша команда состоит из опытных профессионалов, которые увлечены своей работой. Каждый из наших сотрудников - эксперт в своей области, готовый предоставить вам консультации и помощь на высшем уровне." },
];

const settings = {
  dots: true,
  dotsClass: "slick-dots vertical-dots",
  infinite: true,
  vertical: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const AboutUsSlider = () => {
  return (
    <div className="video-slider-container">
      <Slider className='slider-about' {...settings}>
        {videoData.map(video => (
          <div key={video.id} className="video-slide">
            <video
              src={video.src}
              title={video.title}
              controls={false}
              muted
              loop
              autoPlay
              className="video-element"
            />
            <div className="video-overlay">
              <h2 className="video-title">{video.title}</h2>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default AboutUsSlider;
