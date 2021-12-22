import './intro.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ['Back-end', 'Front-end'],
        })
    }, [])
    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey, je suis</h2>
                    <h1>Guillaume Landry</h1>
                    <h3>Développeur, <span ref={textRef}></span></h3>
                    <small className='desc'>Jeune programmeur ambitieux, avec une soif de connaisance qui est toujours prêt à relever son prochain défi. Possédant une motivation sans faille et avec un grand optimisite, je saurai mener à bien les divers projets et demandes.</small>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className='icon' />
                </a>
            </div>

        </div>
    )
}
