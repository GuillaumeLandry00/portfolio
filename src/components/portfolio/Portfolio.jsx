import './portfolio.scss';
import { NavigateNextIcon, } from '@material-ui/icons/';

export default function Portfolio() {

    const videoLink = ["https://www.youtube.com/embed/qF7dkrce-mQ", "https://youtu.be/bC6pmtUxe0o"];

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Music videos</h1>
            <div className="videoContainer">
                <iframe className="iframe" src="https://www.youtube.com/embed/qF7dkrce-mQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='arrowContainer'>
                <span> Previous</span>

                <span>Next </span>
            </div>
        </div>
    )
}
