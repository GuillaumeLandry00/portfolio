import './topbar.scss';
import { Phone, Mail } from '@material-ui/icons/';

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>The Scene</a>
                    <div className="navContainer">
                        <div className="itemContainer">
                            <a href="#"><span>Music videos</span></a>
                        </div>
                        <div className="itemContainer">

                            <a href='#'><span>Merch</span></a>
                        </div>
                        <div className="itemContainer">

                            <a href='#'><span>Art Galleries</span></a>
                        </div>
                        <div className="itemContainer">
                            <a href='#'><span>Updates</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
