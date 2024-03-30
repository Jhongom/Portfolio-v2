import './header.styles.css';
import texts from '../../assets/texts/texts.json'
const Header = () => {
    return (
        <div className='header_container'>
            <div className='header_container-elements'>
                <p className='header_container-elements--detail'>{texts.header.title}</p>
                <p className="header_container-elements--detail2">{texts.header.subtitle}</p>
            </div>
        </div>
    );
};

export default Header