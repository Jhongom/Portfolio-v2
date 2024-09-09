import './banner.styles.css'
import bannerLaptop from '../../assets/img/easlo-laptop.svg'
const Banner  = () => {
    return (
        <div className='banner_container'>
            <div className="info">
                <h1 className="title"></h1>
                <h2 className="subtitle"></h2>
                <p className="paragraph"> </p>
                <p className="paragraph"></p>
                <button className='btn'>Check my CV</button>
            </div>
            <div className="img-banner">
                <img src={bannerLaptop} alt="Banner-laptop"/>
            </div>
        </div>
    );
}
export default Banner