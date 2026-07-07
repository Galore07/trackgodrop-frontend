import images from "../assets/Image";
import "./Logos.css";


const Logos = () => {
    return (
        <div className="lake">
            <div className="pit"><p>Partners of world leading companies</p></div>
            <div className="maria">
                <img src={images.image24} alt="img" className="bigd" to="/" />
                <img src={images.image16} alt="img" className="giveme" to="/" />
                <img src={images.image17} alt="img" className="giveme" to="/" />
                <img src={images.image18} alt="img" className="giveme" to="/" />
                <img src={images.image19} alt="img" className="giveme" to="/" />
                <img src={images.image20} alt="img" className="giveme" to="/" />
                <img src={images.image21} alt="img" className="giveme" to="/" />
                <img src={images.image23} alt="img" className="giveme" to="/" />
                <img src={images.image22} alt="img" className="bigd" to="/" />
            </div>
        </div>
    );
};

export default Logos;
