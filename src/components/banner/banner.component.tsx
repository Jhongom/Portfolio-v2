import './banner.styles.css'
import bannerLaptop from '../../assets/img/easlo-laptop.svg'
import texts from '../../assets/texts/texts.json'
const Banner  = () => {
    return (
        <div className='banner_container'>
            <div className="info">
                <h1>{texts.banner.titulo}</h1>
                <h2>{texts.banner.subtitulo}</h2>
                <p>I'm a certified expert in Notion, helping busy people like you be more organized and productive. </p>
                <p>I design and optimize Notion templates to be clutter-free, so you can focus on what's important and get things done. My work has benefited over 300,000 customers, including students, freelancers, and entrepreneurs.</p>

            </div>
            <div className="img">
                <img src={bannerLaptop} alt="Banner-laptop"/>
            </div>
        </div>
    );
}
export default Banner