import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AboutUsSlider.css';

const videoData = [
  { id: 1, src: "/src/assets/air-cooling-system.mp4", title: "Video 1", description: "This is the first video description." },
  { id: 2, src: "https://www.example.com/video2.mp4", title: "Video 2", description: "This is the second video description." },
  { id: 3, src: "https://www.example.com/video3.mp4", title: "Video 3", description: "This is the third video description." },
];

const settings = {
  dots: true,
  dotsClass: "slick-dots vertical-dots",
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
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
