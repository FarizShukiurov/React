import './NewsCard.css';
const NewsCard = ({image, title, description}) => {
    return (
        <div className="card">
            <img src={image} alt="" className="card-image"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default NewsCard;