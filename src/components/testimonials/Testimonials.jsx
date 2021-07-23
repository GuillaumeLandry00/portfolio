import "./testimonials.scss";
import { isMobile } from 'react-device-detect';

export default function Testimonials() {
    return (
        <div className="testimonials" id='temoinages'>

            <>
                <h1>Bonus: Jeu Javascript </h1>

                {isMobile && <small>Le jeu est optimisé pour les ordinateurs</small>}
                <div className='boxShadow'>
                    <iframe title='Jeux' frameBorder="0" src='assets/jeux.html' className='iframe'></iframe>
                </div>
            </>


        </div>
    )
}