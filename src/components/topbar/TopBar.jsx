import './topbar.scss';
import { Phone, Mail } from '@material-ui/icons/';

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Guillaume</a>
                    <div className="itemContainer">
                        <Phone className='icon' />
                        <a href="tel:4385021402"><span>(438)502-1402</span></a>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <a href='mailto:landry.guillaume00@hotmail.com'><span>landry.guillaume00@hotmail.com</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => (setMenuOpen(!menuOpen))}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
