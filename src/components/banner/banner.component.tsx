import './banner.styles.css'
import bannerLaptop from '../../assets/img/easlo-laptop.svg'
import texts from '../../assets/texts/texts.json'
const Banner  = () => {
    return (
        <div className='banner_container'>
            <div className="info">
                <h1 className="title">{texts.banner.title}</h1>
                <h2 className="subtitle">{texts.banner.subtitle}</h2>
                <p className="paragraph">{texts.banner.paragraph1} </p>
                <p className="paragraph">{texts.banner.paragraph2}</p>
                <button className='btn'>Check my CV</button>
            </div>
            <div className="img">
                <img src={bannerLaptop} alt="Banner-laptop"/>
            </div>
        </div>
    );
}
export default Banner