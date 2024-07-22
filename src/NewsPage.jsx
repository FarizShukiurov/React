import NewsCard from "./NewsCard";
import './NewsPage.css';
const news = [
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_1704690643a84cfde7cb6ab44d89df6d1d321e5e44.jpeg',
      title: 'Claw A1M',
      description: 'Grip and Game',
    },
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_17182663819f22dbfb5aec3bcef860935ac745ca99.jpeg',
      title: 'QD-OLED Series Gaming Monitors',
      description: 'Brighter Colors, Sublime Black Levels',
    },
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_1684233322abc5bdd0ba4ed564bdaba6845444b01b.jpeg',
      title: 'GeForce RTX™ 40 GAMING Series',
      description: 'Play Hard Stay Silent',
    },
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_17046907653dbcc251d53b6f7f38bb4be3b700e946.jpeg',
      title: 'Summit E13 AI Evo A1M',
      description: 'Determined to Succeed',
    },
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_1703742076fce41d5debc4e2837799e29ae36447eb.jpeg',
      title: 'MEG Trident X2 14th',
      description: 'Play Unbound',
    },
    {
      image: 'https://storage-asset.msi.com/global/picture/banner/banner_1684291329b1b14214b06c7c56e417dacc48bf5a51.jpeg',
      title: 'CLUTCH GM51 LIGHTWEIGHT WIRELESS',
      description: 'APEX WIRELESS MOUSE',
    },
  ];

  const NewsPage = () => {
    return (
      <div className="newspage">
        {news.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    );
  };

  export default NewsPage;